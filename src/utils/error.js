export const handleApiError = (error, notify, endpoint = "") => {
  if (error.name === "CanceledError" || error.code === "ERR_CANCELED") {
    return;
  }
  notify({
    type: "error",
    title: endpoint,
    message:
      error?.response?.data?.message ||
      error?.message ||
      "Internal Server Error",
  });
};
