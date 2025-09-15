import { Route, Routes } from "react-router";
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
import StaffRoute from "./StaffRoute";
import AdminProducts from "../modules/products/pages/AdminProducts";
import Product from "../modules/products/pages/Product";
import Cart from "../modules/userCart/pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProfile } from "../modules/login/authSlice";

const AppRoutes = ({ darkMode, setDarkMode }) => {
  const dispatch = useDispatch();
  const { loadingFetch, loadingLogin, loadingLogout } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  if (loadingFetch || loadingLogin || loadingLogout)
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
        <Route path="/product/:id" element={<Product />} />
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route
          element={<UserLayout darkMode={darkMode} setDarkMode={setDarkMode} />}
        >
          <Route path="/user/cart/:id" element={<Cart />} />
        </Route>
        <Route path="/admin" element={<StaffRoute />}>
          <Route
            element={<Layouts darkMode={darkMode} setDarkMode={setDarkMode} />}
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/*" element={<NotFound />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
