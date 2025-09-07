import { useCallback, useState } from "react";
import api from "../api/axios";
import { useNotification } from "../context/NotificationContext";
import useHandleApiError from "./useHandleApiError";

const useDelete = ({ endpoint, title, refetch }) => {
  const [loading, setLoading] = useState(false);
  const { notify } = useNotification();
  const { handleApiError } = useHandleApiError();

  const deleteData = useCallback(
    async (id) => {
      setLoading(true);

      try {
        const { data } = await api.delete(`${endpoint}/${id}`);

        refetch();
        notify({
          type: "success",
          title,
          message: data?.message || `${title} berhasil dihapus`,
        });
      } catch (error) {
        handleApiError({ error, title });
      } finally {
        setLoading(false);
      }
    },
    [endpoint, handleApiError, notify, refetch, title]
  );

  return { deleteData, loading };
};

export default useDelete;
