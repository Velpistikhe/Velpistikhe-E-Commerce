import "./App.css";
import { BrowserRouter as Router } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { AuthContextProvider } from "./context/AuthContext";
import { ConfigProvider } from "antd";
import { NotificationProvider } from "./context/NotificationContext";
import { darkTheme, lightTheme } from "./utils/themeConfig";
import useThemeMode from "./hooks/useThemeMode";

function App() {
  const [darkMode, setDarkMode] = useThemeMode();

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ConfigProvider theme={theme}>
      <NotificationProvider>
        <AuthContextProvider>
          <Router>
            <AppRoutes darkMode={darkMode} setDarkMode={setDarkMode} />
          </Router>
        </AuthContextProvider>
      </NotificationProvider>
    </ConfigProvider>
  );
}

export default App;
