import axios from 'axios';

const url = process.env.BASE_URL;

export const api = axios.create({
  baseURL: url,
});

api.interceptors.response.use(undefined, error => Promise.reject(error?.response?.data));
