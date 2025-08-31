import { createContext, useCallback, useEffect, useState } from "react";
import api from "../api/axios";
import { useNotification } from "./NotificationContext";
import { handleApiError } from "../utils/error";

export const AuthContext = createContext({
  user: null,
  loading: false,
  fetchProfile: () => {},
  login: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const { notify } = useNotification();

  const fetchProfile = useCallback(async () => {
    setLoading(true);

    try {
      setUser(false);
      setIsFetched(true);
    } catch (err) {
      handleApiError(err, notify, "profile");
      setIsFetched(true);
    } finally {
      setLoading(false);
    }
  }, [notify]);

  const login = async (values) => {
    setLoading(true);

    try {
      const data = await api.post("user/login", values);

      notify({
        type: "success",
        title: "profile",
        message: data?.message || "Berhasil Login",
      });

      await fetchProfile();
    } catch (err) {
      handleApiError(err, notify, "login");
      setIsFetched(true);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <AuthContext.Provider
      value={{ user, loading: !isFetched && loading, fetchProfile, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};
