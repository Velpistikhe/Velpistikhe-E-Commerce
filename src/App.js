import "./App.css";
import { BrowserRouter as Router } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { ConfigProvider } from "antd";
import { NotificationProvider } from "./context/NotificationContext";
import { darkTheme, lightTheme } from "./utils/themeConfig";
import useThemeMode from "./hooks/useThemeMode";
import { Provider } from "react-redux";
import store from "./app/store";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

function App() {
  const [darkMode, setDarkMode] = useThemeMode();

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <Provider store={store}>
      <Router>
        <ConfigProvider theme={theme}>
          <NotificationProvider>
            <ErrorBoundary>
              <AppRoutes darkMode={darkMode} setDarkMode={setDarkMode} />
            </ErrorBoundary>
          </NotificationProvider>
        </ConfigProvider>
      </Router>
    </Provider>
  );
}

export default App;
