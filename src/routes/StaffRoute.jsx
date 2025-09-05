import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const StaffRoute = () => {
  const { user } = useAuth();

  return user.role === "Staff" ? <Outlet /> : <Navigate to={"/"} />;
};

export default StaffRoute;
