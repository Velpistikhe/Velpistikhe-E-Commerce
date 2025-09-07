import { useCallback } from "react";
import { useNotification } from "../context/NotificationContext";

const useHandleApiError = () => {
  const { notify } = useNotification();

  const handleApiError = useCallback(
    ({ error, title = "", setLoading = () => {}, silent401 = false }) => {
      if (error.name === "CanceledError" || error.code === "ERR_CANCELED") {
        return;
      }

      setLoading(false);

      if (error?.response?.status === 401) {
        if (!silent401) {
          notify({
            type: "error",
            title,
            message: "Sesi Anda telah habis. Silahkan login kembali",
          });
        }
        return;
      }

      notify({
        type: "error",
        title,
        message:
          error?.message ||
          error?.response?.data?.message ||
          "Terjadi kesalahan saat memproses permintaan. Silakan coba lagi.",
      });
    },
    [notify]
  );

  return { handleApiError };
};

export default useHandleApiError;
