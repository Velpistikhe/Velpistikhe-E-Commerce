import "./App.css";
import { BrowserRouter as Router } from "react-router";
import { App as AntdApp, ConfigProvider, theme } from "antd";
import AppRoutes from "./routes/AppRoutes";
import { AuthContextProvider } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";

function App() {
  return (
    <Router>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <NotificationProvider>
          <AuthContextProvider>
            <AntdApp>
              <AppRoutes />
            </AntdApp>
          </AuthContextProvider>
        </NotificationProvider>
      </ConfigProvider>
    </Router>
  );
}

export default App;
