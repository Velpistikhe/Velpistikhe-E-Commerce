import { useCallback, useState } from "react";
import api from "../api/axios";
import useNotification from "./useNotification";

const usePost = ({ endpoint, refetch = () => {}, reset = () => {} }) => {
  const [loading, setLoading] = useState(false);
  const { notify } = useNotification();

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
      } finally {
        setLoading(false);
      }
    },
    [endpoint, notify, refetch, reset]
  );

  return { postData, loading };
};

export default usePost;
