import axios from "axios";
import { getToken } from "./session";

export class WebAgent {

    constructor(baseURL) {
        this.createInstance(baseURL);
    }

    createInstance(baseURL) {
        this.instance = baseURL ? axios.create({ baseURL }) : axios.create();
        this.instance.defaults.timeout = 1 * 60 * 1000; // Requests will wait 1 minute before timing out
        this.instance.defaults.headers['content-type'] = 'application/json';
        this.instance.defaults.responseType = 'json';
    }

    setToken(token) {
        if (token) this.token = token;
        return this;
    }

    setConfig(userConfig) {
        const config = { ...userConfig };
        const token = config.hasOwnProperty("token") ? config.token : this.token;
        if (token) {
            if (!config.hasOwnProperty('headers')) config.headers = {};
            config.headers['access-token'] = token;
        }
        return config;
    }

    get(url, data, _config = {}) {
        const config = { params: (data || {}), ...this.setConfig(_config) };
        return this.instance.get(url, config);
    }

    post(url, data, config = {}) {
        return this.instance.post(url, data, this.setConfig(config));
    }

    put(url, data, config = {}) {
        return this.instance.put(url, data, this.setConfig(config));
    }

    delete(url, data, _config = {}) {
        const config = { params: (data || {}), ...this.setConfig(_config) };
        return this.instance.delete(url, config);
    }
}

export const webAgent = new WebAgent("https://jsonplaceholder.typicode.com").setToken(getToken());