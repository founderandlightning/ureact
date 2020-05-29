export const serverErrors = ({
  response,
  request,
  message,
  config,
  response: {
    data,
    data: { error = {} } = {},
    status,
  } = {},
} = {}) => {
  switch (true) {
    case response && data && status >= 400 && status !== 404 && status <= 499:
      return returnErrorObject(true, error, data.message, false);

    case response && status >= 500:
      return returnErrorObject(false, null, 'Internal Server Error', true);

    case response && status === 404:
      return returnErrorObject(true, null, 'Not found', false);

    case !response && request:
      return returnErrorObject(false, null, request, false);

    case !!message:
      return returnErrorObject(false, null, message, false);

    default:
      return returnErrorObject(false, null, config, false);
  }
};

const returnErrorObject = (
  clientError,
  errorDetails,
  message,
  serverError,
) => ({
  clientError,
  errorDetails,
  message,
  serverError,
});
