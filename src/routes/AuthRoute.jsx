import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

const AuthRoute = () => {
  const { user } = useContext(AuthContext);

  return user ? <Navigate to="/" /> : <Outlet />;
};

export default AuthRoute;
