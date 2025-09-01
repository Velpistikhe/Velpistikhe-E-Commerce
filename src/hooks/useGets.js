import { useCallback, useEffect, useMemo, useState } from "react";
import api from "../api/axios";
import { useNotification } from "../context/NotificationContext";
import useHandleApiError from "./useHandleApiError";

const useGets = ({ endpoint, initialParams = {}, config = {} }) => {
  const [params, setParams] = useState(initialParams);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const { notify } = useNotification();
  const { handleApiError } = useHandleApiError();

  const fetchData = useCallback(
    async (signal) => {
      setLoading(true);
      try {
        const response = await api.get(endpoint, {
          signal,
          withCredentials: true,
          params,
        });
        setData(response?.data || []);
        setIsFetched(true);
      } catch (error) {
        handleApiError({ error, notify, endpoint, setLoading });
        setIsFetched(true);
      } finally {
        setLoading(false);
      }
    },
    [endpoint, notify, params, handleApiError]
  );

  useEffect(() => {
    if (!endpoint) return;

    const controller = new AbortController();

    fetchData(controller.signal);

    return () => controller.abort();
  }, [fetchData, endpoint]);

  return useMemo(
    () => ({
      data,
      loading,
      isFetched,
      refetch: fetchData,
      params,
      setParams,
    }),
    [data, loading, isFetched, fetchData, params]
  );
};

export default useGets;
