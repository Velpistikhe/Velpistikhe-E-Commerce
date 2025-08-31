import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ConfigProvider, theme } from "antd";
import { NotificationProvider } from "./context/NotificationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </ConfigProvider>
  </React.StrictMode>
);
