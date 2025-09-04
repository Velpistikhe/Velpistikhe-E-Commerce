import { Route, Routes } from "react-router";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loading";
import SecondaryLayouts from "../components/SecondaryLayouts";
import UserLayout from "../components/UserLayout";
import Home from "../modules/home/pages/Home";
import NotFound from "../components/NotFound";

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
        <Route path="*" element={<NotFound />} />
      </Route>
      {/* <Route element={<AuthRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<Layouts />}>
          <Route index element={<Dashboard />} />
          <Route path="/item" element={<Items />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route> */}
    </Routes>
  );
};

export default AppRoutes;
