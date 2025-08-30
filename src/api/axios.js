import axios from "axios";

const api = axios.create({
  baseURL: "https://restful-api-production-7859.up.railway.app/api/v1/",
  timeout: 10000,
  withCredentials: true,
});

export default api;
