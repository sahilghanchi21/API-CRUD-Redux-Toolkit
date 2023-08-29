import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_COMMON_URL
});

export const createRequestFunc = async (methods, url, body) => {
    let config = {
        method: methods,
        url,
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
    };
    return axiosInstance(config)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
}