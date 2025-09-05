import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
