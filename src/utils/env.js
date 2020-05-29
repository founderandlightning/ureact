export const ENV = {
  DEV: 'DEV',
  UAT: 'UAT',
  PROD: 'PROD',
};

const ORIGINS = {
  [ENV.DEV]: [
    'localhost:3000',
    '192.168.1.23:3000',
  ],
  [ENV.UAT]: [
    '',
  ],
  [ENV.PROD]: [
    '',
  ],
};

const API_URL = {
  [ENV.DEV]: "",
  [ENV.UAT]: "v1",
  [ENV.PROD]: "",
};

const getEnv = (origin = window.location.origin) => Object
  .entries(ORIGINS)
  .reduce((acc, [key, array]) => array.some((url) => origin.includes(url)) ? key : acc, ENV.DEV);

export const apiUrl = API_URL[getEnv()];
export const env = getEnv();
export const isProd = getEnv() === ENV.PROD;
