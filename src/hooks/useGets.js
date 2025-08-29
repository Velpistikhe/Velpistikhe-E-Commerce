import { useCallback, useEffect, useState } from "react";
import api from "../api/axios";

const useGets = ({ name }) => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDatas = useCallback(
    async (signal) => {
      setLoading(true);

      try {
        const { data } = await api.get(name, {
          signal,
          withCredentials: true,
        });

        setDatas(data[name]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [name]
  );

  useEffect(() => fetchDatas, [fetchDatas]);

  return { datas, loading, refetch: fetchDatas };
};

export default useGets;
