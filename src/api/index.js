import { navigate } from "@reach/router";

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

api.interceptors.request.use((config) => {
  if (localStorage.getItem("token")) {
    config.headers.common["Authorization"] = `Token ${localStorage.getItem(
      "token"
    )}`;
  }
  return config;
}, Promise.reject);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      navigate("/login");
    }
    if (error.response.status === 404) {
      // history.push("/error");
    }
    return Promise.reject(error);
  }
);

api.format = function (response, error = false) {
  return {
    error,
    data: response ? response.data : {},
    status: response ? response.status : 404,
  };
};

console.log("api", { api });

export default api;
