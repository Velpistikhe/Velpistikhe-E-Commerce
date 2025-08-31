import { notification } from "antd";
import { createContext, useContext, useCallback } from "react";

export const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  const notify = useCallback(
    ({ type = "info", title, message }) => {
      const types = ["success", "error", "info", "warning"];
      if (!types.includes(type)) {
        console.warn(`Unknown notification type: "${type}"`);
        return;
      }

      api[type]({
        message: title?.toUpperCase() ?? "",
        description: message ?? "",
        placement: "topRight",
      });
    },
    [api]
  );

  return (
    <NotificationContext.Provider value={{ notify }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
