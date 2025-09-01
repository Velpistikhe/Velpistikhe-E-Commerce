import { useCallback } from "react";
import { useNotification } from "../context/NotificationContext";

const useHandleApiError = () => {
  const { notify } = useNotification();

  const handleApiError = useCallback(
    ({ error, endpoint = "", setLoading = null }) => {
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

      if (setLoading) setLoading(false);
    },
    [notify]
  );

  return { handleApiError };
};

export default useHandleApiError;
