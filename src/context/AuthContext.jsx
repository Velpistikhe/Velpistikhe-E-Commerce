import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import api from "../api/axios";
import { useNotification } from "./NotificationContext";
import { handleApiError } from "../utils/error";
import Loading from "../components/Loading";

export const AuthContext = createContext({
  user: null,
  loading: false,
  fetchProfile: () => {},
  login: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { notify } = useNotification();

  const fetchProfile = useCallback(
    async (signal) => {
      setLoading(true);

      try {
        const { data } = await api.post("user/profile", {
          signal,
        });

        setUser(data?.user || null);
        setLoading(false);
      } catch (err) {
        handleApiError(err, notify, "profile");
        setLoading(false);
      }
    },
    [notify]
  );

  const login = useCallback(
    async (values) => {
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
      }
    },
    [fetchProfile, notify]
  );

  useEffect(() => {
    const controller = new AbortController();

    fetchProfile(controller.signal);

    return controller.abort();
  }, [fetchProfile]);

  const contextValue = useMemo(() => {
    return { user, loading, fetchProfile, login };
  }, [user, loading, fetchProfile, login]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
