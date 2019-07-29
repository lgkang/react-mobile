function setStorage(storage = localStorage, data: data) {
    const key = data.key;
    delete data.key;
    if (data.type === "object") {
        // 对象设置
        data.value = JSON.stringify(data.value);
    } else if (data.type === "function") {
        console.error("不允许设置函数进入缓存");
        data.value = "";
    }
    storage.setItem(key, JSON.stringify(data));
}

function getStorage(storage = localStorage, key) {
    let data = JSON.parse(storage.getItem(key)) || {};
    if (typeof data === "string") {
        return data;
    }
    let result = "";
    if (Date.now() > Number(data.exp) || data.value === "") {
        Date.now() > Number(data.exp) && console.warn("缓存已经过期");
        storage.removeItem("key");
        return "";
    }
    switch (data.type) {
        case "number":
            result = Number(data.value);
            break;
        case "object":
            result = JSON.parse(data.value);
            break;
        case "undefined":
            result = undefined;
            break;
        case "null":
            result = null;
            break;
        case "boolean":
            result = !!data.value;
            break;
        default :
            result = data.value;
    }
    return result;
}

function paramDeal(storageType, arr = []) {
    const {0: key, 1: value, 2: exp} = arr;
    const data = {
        key,
        value,
        exp: exp ? Date.now() + exp : "Infinity",
        type: "string",
    };
    data.type = isNull(data.value) ? "null" : typeof data.value;
    setStorage(storageType as Storage, data);
}

class Cache {
    setLocal(...args) {
        paramDeal(localStorage, ([...args] as any));
    }

    getLocal(key) {
        return getStorage(localStorage, key);
    }

    setSession(...args) {
        paramDeal(sessionStorage, ([...args] as any));
    }

    getSession(key) {
        return getStorage(sessionStorage, key);
    }
}

function isNull(value) {
    return value === null;
}

export default new Cache();

