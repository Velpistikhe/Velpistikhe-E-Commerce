import { Route, Routes } from "react-router";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loading";
import SecondaryLayouts from "../components/SecondaryLayouts";
import UserLayout from "../components/UserLayout";
import Home from "../modules/home/pages/Home";
import NotFound from "../components/NotFound";
import Login from "../modules/login/pages/Login";
import Register from "../modules/register/pages/Register";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";
import Layouts from "../components/Layouts";
import Dashboard from "../modules/dashboard/pages/Dashboard";
import Items from "../modules/item/pages/Items";
import StaffRoute from "./StaffRoute";

const AppRoutes = ({ darkMode, setDarkMode }) => {
  const { loading } = useAuth();

  if (loading)
    return (
      <SecondaryLayouts>
        <Loading />
      </SecondaryLayouts>
    );

  return (
    <Routes>
      <Route
        element={<UserLayout darkMode={darkMode} setDarkMode={setDarkMode} />}
      >
        <Route index element={<Home />} />
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<StaffRoute />}>
          <Route element={<Layouts />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/item" element={<Items />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
