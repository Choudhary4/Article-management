import axios from "axios";

const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData = null, headers = {}, params = {}) => {
    return axiosInstance({
        method: method,
        url: url,
        data: bodyData,      // Use `data` instead of `bodyData`
        headers: headers,    // Default to an empty object if headers are not provided
        params: params       // Default to an empty object if params are not provided
    });
};