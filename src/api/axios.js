import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 20000,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      console.debug("[Axios] 401 Unauthorized intercepted silently.");
    }

    return Promise.reject(error);
  }
);

export default api;
