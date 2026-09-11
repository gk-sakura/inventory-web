import axios from 'axios';
import {showError} from "@/utils/feedback.ts";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
  }
})

http.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
})

http.interceptors.response.use(
  response => response,
  error => {
    const backendMessage = error?.response?.data?.message

    const errorMessage =
      backendMessage ??
      (error.code === 'ECONNABORTED'
        ? '请求超时，请稍后重试'
        : error.response
          ? '请求失败，请稍后重试'
          : '网络连接失败，请检查网络或后端服务')
    showError(errorMessage)
    return Promise.reject(error.response?.data ?? error)
  }
)

export default http;
