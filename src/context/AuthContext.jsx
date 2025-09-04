import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import api from "../api/axios";
import { useNotification } from "./NotificationContext";
import useHandleApiError from "../hooks/useHandleApiError";

const AuthContext = createContext({
  user: null,
  loading: false,
  fetchProfile: () => {},
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { notify } = useNotification();
  const { handleApiError } = useHandleApiError();

  const fetchProfile = useCallback(
    async (signal) => {
      setLoading(true);

      try {
        const { data } = await api.get("user/profile", {
          signal,
          withCredentials: true,
        });

        setUser(data?.user || null);
        setLoading(false);
      } catch (error) {
        handleApiError({ error, title: "Profile", setLoading });
      }
    },
    [handleApiError]
  );

  const login = useCallback(
    async (values) => {
      setLoading(true);

      try {
        const { data } = await api.post("user/login", values);

        notify({
          type: "success",
          title: "profile",
          message: data?.message || "Berhasil Login",
        });

        await fetchProfile();
      } catch (error) {
        handleApiError({ error, title: "Login", setLoading });
      }
    },
    [fetchProfile, notify, handleApiError]
  );

  const logout = useCallback(async () => {
    setLoading(true);

    try {
      const data = await api.post("user/logout");

      notify({
        type: "success",
        title: "Log out",
        message: data?.message || "Berhasil Log out",
      });

      setUser(null);
      setLoading(false);
    } catch (error) {
      handleApiError({ error, title: "Log out", setLoading });
    }
  }, [notify, handleApiError]);

  useEffect(() => {
    const controller = new AbortController();

    fetchProfile(controller.signal);

    return () => controller.abort();
  }, [fetchProfile]);

  const contextValue = useMemo(() => {
    return { user, loading, fetchProfile, login, logout };
  }, [user, loading, fetchProfile, login, logout]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
