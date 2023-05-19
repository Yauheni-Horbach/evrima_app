export const errorMessageHandler = (error: any) => {
  if (error.response) {
    if (typeof error.response.data.message === 'object') {
      return error.response.data.message[0];
    }
    return error.response.data.message;
  } else if (error.request) {
    return error.request;
  } else {
    return error.message;
  }
};
