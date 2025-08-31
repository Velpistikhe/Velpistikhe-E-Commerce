import { Route, Routes } from "react-router";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";
import Layouts from "../components/Layouts";
import Register from "../modules/register/pages/Register";
import Login from "../modules/login/pages/Login";
import NotFound from "../components/NotFound";
import Dashboard from "../modules/dashboard/pages/Dashboard";
import Items from "../modules/item/pages/Items";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<Layouts />}>
          <Route index element={<Dashboard />} />
          <Route path="/item" element={<Items />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
