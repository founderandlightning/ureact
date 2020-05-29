import { create } from "axios";
import { apiUrl as baseURL, serverErrors } from "utils";
import { getUserToken, logoutUser } from "utils/session";
import { history } from "utils/history";

// create a configurable axios instance
export const axios = create({
  baseURL,
  headers: {
    common: { "Content-Type": "application/json" },
  },
});

// create global error handling logic
const handleErrors = (error) => {
  const { response: { status = "" } = {} } = error || {};
  if (status === 403) {
    logoutUser();
    history.push("/login");
  }

  return Promise.reject(serverErrors(error));
};

// global request handling
axios.interceptors.response.use(
  (response) => response,
  (error) => handleErrors(error),
);

axios.interceptors.request.use(
  (config) => {
    const token = getUserToken();
    const request = config;
    if (token) {
      request.headers.common.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => Promise.reject(error),
);
