import axios from "axios";
import requseConfig from "./config";
import {cache} from "../utils";

const instance = axios.create(requseConfig);

instance.interceptors.request.use(config => {
    config.headers.token = config.headers.token || cache.getLocal("token") || "";
    config.headers.userId = config.headers.userId || cache.getLocal("userId") || "";
    config.headers.vid = config.headers.vid || cache.getLocal("vid") || "";
    return config;
});
instance.interceptors.response.use(response => {
    if (!response.request.headers.vid) {
        requseConfig.headers.vid = response.data.vid;
        cache.setLocal('vid', response.data.vid, Infinity);
    }
    if (response.data.code === 200) {
        return response.data;
    }
    if (response.data.code === 4004) {
        // TODO：登录过期
    }
    console.error(response.data.message);
    return Promise.reject(response.data);
}, error => {
    console.error(error.message);
    return error;
});
