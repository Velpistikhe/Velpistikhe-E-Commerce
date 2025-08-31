import { Route, Routes } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";
import Layouts from "../components/Layouts";
import Register from "../modules/register/pages/Register";
import Login from "../modules/login/pages/Login";
import NotFound from "../components/NotFound";
import Dashboard from "../modules/dashboard/pages/Dashboard";
import Items from "../modules/item/pages/Items";
import Loading from "../components/Loading";
import SecondaryLayouts from "../components/SecondaryLayouts";

const AppRoutes = () => {
  const { loading } = useContext(AuthContext);

  if (loading)
    return (
      <SecondaryLayouts>
        <Loading />
      </SecondaryLayouts>
    );

  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<Layouts />}>
          <Route index element={<Dashboard />} />
          <Route path="/item" element={<Items />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
