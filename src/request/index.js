import axios from "axios";
import requseConfig from "./config";

const instance = axios.create(requseConfig);

//拦截请求
instance.interceptors.request.use(config => {
    return config;
});
//拦截响应
instance.interceptors.response.use(response => {
    if (response.data.code === 200) {
        return response.data;
    }
    console.error(response.data.message);
    return Promise.reject(response.data);
}, error => {
    console.error(error.message);
    return error;
});
