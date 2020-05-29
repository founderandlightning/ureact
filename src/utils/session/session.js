import Cookies from 'js-cookie';
import { env, ENV } from "utils/env";

export const setLocalStorageData = (key, value, jsonString = true) => {
  const data = jsonString
    ? JSON.stringify(value)
    : value;

  localStorage.setItem(key, data);
};

export const getLocalStorageData = (key, json = true) => {
  const data = localStorage.getItem(key);

  return json
    ? JSON.parse(data)
    : data;
};

export const getUserData = () => {
  return getLocalStorageData("loginUser");
};

export const checkUserAuth = (key) => {
  return (Cookies.get(key)) ? true : false;
};

export const setUserToken = (token) => {
  const secure = (env !== ENV.DEV);
  Cookies.set('sessionToken', token, { secure, path: "/" });
};

export const getUserToken = () => {
  return Cookies.get('sessionToken');
};

export const removeUserToken = () => {
  Cookies.remove('sessionToken');
};

export const clearData = (key) => {
  localStorage.removeItem(key);
};

export const logoutUser = () => {
  localStorage.removeItem('loginUser');
};

export const clearlocalStorage = () => {
  localStorage.clear();
};
