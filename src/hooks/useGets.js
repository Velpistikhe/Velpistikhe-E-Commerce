import { useCallback, useEffect, useState } from "react";
import api from "../api/axios";

const useGets = ({ name }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [name]
  );

  useEffect(() => {
    const contoller = new AbortController();
    fetchDatas(contoller.signal);

    return () => contoller.abort();
  }, [fetchDatas]);

  return { data, loading, refetch: fetchDatas };
};

export default useGets;
