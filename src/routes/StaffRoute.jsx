import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const StaffRoute = () => {
  const { user } = useSelector((state) => state.auth);

  return user?.role === "Staff" ? <Outlet /> : <Navigate to={"/"} />;
};

export default StaffRoute;
