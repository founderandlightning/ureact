import {
  emailRegex,
} from './regexConstants';

export const checkRequiredField = (key, value) => {
  const message = (!value) ? "This field is required" : "";
  return { [key]: message };
};
export const handleServerErrors = (ServerErrors) => (
  Object.entries(ServerErrors)
    .reduce((acc, [key, [value]]) => (
      { ...acc, [key]: value }),
    {})
);
export const validateEmail = (key, value) => {
  switch (true) {
    case (!value):
      return { [key]: "Email field is required" };

    case (!emailRegex.test(value)):
      return { [key]: "Invalid email address" };

    default:
      return { [key]: "" };
  }
};
