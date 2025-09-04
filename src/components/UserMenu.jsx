import { Avatar, Dropdown } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  LoginOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const UserMenu = ({ setOpenLogin }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const items = [
    user
      ? ({ key: "profile", label: "Profile", icon: <ProfileOutlined /> },
        {
          key: "logout",
          label: "Logout",
          icon: <LogoutOutlined />,
          onClick: () => logout(),
        })
      : {
          key: "login",
          label: "Login",
          icon: <LoginOutlined />,
          onClick: () => navigate("/login"),
        },
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
