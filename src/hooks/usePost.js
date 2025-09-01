import { useCallback, useState } from "react";
import api from "../api/axios";
import { useNotification } from "../context/NotificationContext";
import useHandleApiError from "./useHandleApiError";

const usePost = ({ endpoint, refetch = () => {}, reset = () => {} }) => {
  const [loading, setLoading] = useState(false);
  const { notify } = useNotification();
  const { handleApiError } = useHandleApiError();

  const postData = useCallback(
    async ({ data }) => {
      setLoading(true);

      try {
        const response = await api.post(endpoint, data, {
          withCredentials: true,
        });

        refetch();
        reset();
        notify({
          type: "success",
          title: endpoint,
          message: response.data.message,
        });
      } catch (error) {
        handleApiError({ error, endpoint, setLoading });
      } finally {
        setLoading(false);
      }
    },
    [endpoint, notify, refetch, reset, handleApiError]
  );

  return { postData, loading };
};

export default usePost;
