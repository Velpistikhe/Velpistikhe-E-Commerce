import { Avatar, Dropdown, Tooltip } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  LoginOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { useAuth } from "../context/AuthContext";

const UserMenu = () => {
  const { user } = useAuth();

  const items = [
    user
      ? ({ key: "profile", label: "Profile", icon: <ProfileOutlined /> },
        { key: "logout", label: "Logout", icon: <LogoutOutlined /> })
      : { key: "login", label: "Login", icon: <LoginOutlined /> },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
      <Avatar
        style={{ backgroundColor: "#1890ff", cursor: "pointer" }}
        icon={<UserOutlined />}
      />
    </Dropdown>
  );
};

export default UserMenu;
