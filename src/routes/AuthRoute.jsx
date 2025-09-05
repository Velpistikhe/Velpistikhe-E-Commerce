import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

const AuthRoute = () => {
  const { user } = useAuth();

  return user ? <Navigate to="/" /> : <Outlet />;
};

export default AuthRoute;
