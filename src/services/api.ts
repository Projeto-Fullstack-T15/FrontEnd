import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:8000.com/api',
  timeout: 5000,
});
