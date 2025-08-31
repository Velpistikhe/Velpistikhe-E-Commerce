import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext({
  user: null,
  loading: false,
  fetchProfile: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    try {
      setUser(null);
      setIsFetched(true);
    } catch (error) {
      setIsFetched(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <AuthContext.Provider
      value={{ user, loading: isFetched || loading, fetchProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
