import { App } from "antd";
import { useMemo } from "react";

const useNotification = () => {
  const { notification } = App.useApp();
  const notify = useMemo(() => {
    return ({ type, title, message }) => {
      notification[type]({
        message: title.toUpperCase(),
        description: message,
        placement: "topRight",
      });
    };
  }, [notification]);

  return { notify };
};

export default useNotification;
