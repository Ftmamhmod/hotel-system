import axios from "axios";

export const baseURL = `https://upskilling-egypt.com:3000/api/v0/portal/`;

export const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: localStorage.getItem("token") },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// USERS_URLS
export const USERS_URLS = {
  LOGIN: `/users/login`,
  REGISTER: `/users`,
  FORGOT_PASSWORD: `/users/forgot-password`,
  RESET_PASSWORD: `users/reset-password`,
  CHANGE_PASSWORD: `/users/change-password`,
  GOOGLE_AUTH: `/users/auth/google`,
  FACEBOOK_AUTH: `/users/auth/facebook`,
};
