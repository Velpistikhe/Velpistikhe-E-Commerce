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
    <Router>
      <ConfigProvider theme={theme}>
        <NotificationProvider>
          <AuthContextProvider>
            <AppRoutes darkMode={darkMode} setDarkMode={setDarkMode} />
          </AuthContextProvider>
        </NotificationProvider>
      </ConfigProvider>
    </Router>
  );
}

export default App;
