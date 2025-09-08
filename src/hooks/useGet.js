import { useCallback, useEffect, useState } from "react";
import useHandleApiError from "./useHandleApiError";
import api from "../api/axios";

const useGet = ({ id, endpoint, title }) => {
  const [data, setData] = useState(null);
  const [isFetched, setIsFetched] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleApiError } = useHandleApiError();

  const fetchData = useCallback(
    async (signal) => {
      setLoading(true);

      try {
        const response = await api.get(`${endpoint}/${id}`, {
          signal,
        });

        setData(response?.data);
        setIsFetched(true);
      } catch (error) {
        handleApiError({ error, title, setLoading, silent401: true });
      } finally {
        setLoading(false);
      }
    },
    [endpoint, id, handleApiError, title]
  );

  useEffect(() => {
    if (!endpoint) return;

    const controller = new AbortController();

    fetchData(controller.signal);

    return () => controller.abort();
  }, [fetchData, endpoint]);

  return { data, loading, isFetched };
};

export default useGet;
