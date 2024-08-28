/* eslint-disable */
import axios from 'axios';

const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api', // Your backend API URL
  baseURL: 'https://plankton-app-ilfjo.ondigitalocean.app/api',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
