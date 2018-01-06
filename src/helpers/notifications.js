import toastr from "toastr";

export const toastError = message => {
  toastr.error(message, "Opps!! Operation failed miserably:");
};

export const toastSuccess = message => {
  toastr.success(message, "Yaay!! Operation was successful:");
};
