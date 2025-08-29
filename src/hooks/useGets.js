import { useCallback, useEffect, useState } from "react";
import api from "../api/axios";

const useGets = (url) => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDatas = useCallback(
    async (signal) => {
      setLoading(true);

      try {
        const { data } = await api.get(url, {
          signal,
          withCredentials: true,
        });

        setDatas(data[url]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  useEffect(() => fetchDatas, [fetchDatas]);

  return { datas, loading, refetch: fetchDatas };
};

export default useGets;
