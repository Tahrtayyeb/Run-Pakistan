// src/services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://runpakistan.vercel.app';
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // This is important for sending cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  console.log('Outgoing request:', config.method.toUpperCase(), config.url);
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
  },
    (error) => {
      return Promise.reject(error);
  });

api.interceptors.response.use(
  (response) => {
    console.log('Received response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('API Error:', error.response ? error.response.data : error.message);
    console.error('Error details:', error);
    return Promise.reject(error);
  }
);

export default api;
