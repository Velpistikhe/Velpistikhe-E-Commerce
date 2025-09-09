import { useCallback, useState } from "react";
import api from "../api/axios";
import { useNotification } from "../context/NotificationContext";
import useHandleApiError from "./useHandleApiError";

const usePost = ({ endpoint, title, refetch = () => {}, reset = () => {} }) => {
  const [loading, setLoading] = useState(false);
  const { notify } = useNotification();
  const { handleApiError } = useHandleApiError();

  const postData = useCallback(
    async ({ formData }) => {
      setLoading(true);

      const params = { category: title.toLowerCase() };

      try {
        const { data } = await api.post(endpoint, formData, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params,
        });

        refetch();
        reset();
        notify({
          type: "success",
          title,
          message: data.message,
        });
      } catch (error) {
        handleApiError({ error, title });
      } finally {
        setLoading(false);
      }
    },
    [endpoint, title, notify, refetch, reset, handleApiError]
  );

  return { postData, loading };
};

export default usePost;
