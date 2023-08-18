import axios from "axios";

export const api = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:8000.com/",
=======
  baseURL: 'http://localhost:8000.com/api',
>>>>>>> ae168fb1759e256eedd635d88529baeaf247b9c5
  timeout: 5000,
});
