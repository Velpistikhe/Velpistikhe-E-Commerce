import { useCallback, useEffect, useState } from "react";
import api from "../api/axios";
import useNotification from "./useNotification";

const useGets = ({ name }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { notify } = useNotification();

  const fetchDatas = useCallback(
    async (signal) => {
      setLoading(true);

      try {
        const { data } = await api.get(name, {
          signal,
          withCredentials: true,
        });

        setData(data?.[name] || []);
      } catch (error) {
        if (error.name === "CanceledError" || error.code === "ERR_CANCELED") {
          return;
        }
        notify({
          type: "error",
          title: name,
          message: error?.message || "Internal Server Error",
        });
      } finally {
        setLoading(false);
      }
    },
    [name, notify]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchDatas(controller.signal);

    return () => controller.abort();
  }, [fetchDatas]);

  return { data, loading, refetch: fetchDatas };
};

export default useGets;
