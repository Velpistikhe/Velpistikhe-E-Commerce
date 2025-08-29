import { useCallback, useEffect, useState } from "react";
import api from "../api/axios";
import useNotification from "./useNotification";

const useGets = ({ endpoint, responseKey }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const { notify } = useNotification();

  const fetchData = useCallback(
    async (signal) => {
      setLoading(true);

      try {
        const { data } = await api.get(endpoint, {
          signal,
          withCredentials: true,
        });

        setData(data?.[responseKey] || []);
        setHasFetched(true);
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
        setHasFetched(true);
      } finally {
        setLoading(false);
      }
    },
    [endpoint, notify, responseKey]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);

    return () => controller.abort();
  }, [fetchData]);

  return { data, loading, hasFetched, refetch: fetchData };
};

export default useGets;
