import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://t15-kenzie-cars-announcements.onrender.com/api',
  timeout: 5000,
});

export const carsApi = axios.create({
  baseURL: 'https://kenzie-kars.herokuapp.com',
  timeout: 10000,
});
