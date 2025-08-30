import "./App.css";
import { BrowserRouter as Router } from "react-router";
import { App as AntdApp, ConfigProvider, theme } from "antd";
import AppRoutes from "./routes/AppRoutes";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <AuthContextProvider>
          <AntdApp>
            <AppRoutes />
          </AntdApp>
        </AuthContextProvider>
      </ConfigProvider>
    </Router>
  );
}

export default App;
