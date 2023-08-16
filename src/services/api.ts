import axios from "axios";

export const Api = axios.create({
  baseURL: "http://localhost:5173/api",
  timeout: 5000,
});
