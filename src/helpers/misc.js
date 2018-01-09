// Prepare pagination parameters
export function paginationParams(page, limit) {
  var pagination = "";
  // Check if we have pagination params
  if (typeof page !== "undefined" && typeof limit !== "undefined") {
    pagination = `limit=${limit}&page=${page}`;
  }
  return pagination;
}

// separate network errors from API errors
export function getErrorMessage(error) {
  let message = "An undefined error occured";

  if (typeof error.response != "undefined") {
    message = error.response.data.message;
  } else {
    message = error.message;
  }
  return message;
}
