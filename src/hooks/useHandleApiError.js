import { useCallback } from "react";
import { useNotification } from "../context/NotificationContext";

const useHandleApiError = () => {
  const { notify } = useNotification();

  const handleApiError = useCallback(
    ({ error, title = "", setLoading = null }) => {
      if (error.name === "CanceledError" || error.code === "ERR_CANCELED") {
        return;
      }

      notify({
        type: "error",
        title,
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Internal Server Error",
      });

      if (setLoading) setLoading(false);
    },
    [notify]
  );

  return { handleApiError };
};

export default useHandleApiError;
