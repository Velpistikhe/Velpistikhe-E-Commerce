import { Avatar, Flex, Menu, Popover, theme } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  LoginOutlined,
  ProfileOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const UserMenu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  const items = user
    ? [
        user.role === "Staff" && {
          key: "app",
          label: "App Manager",
          icon: <AppstoreOutlined />,
          onClick: () => navigate("/admin/dashboard"),
        },
        user.role === "Guest" && {
          key: "profile",
          label: "Profile",
          icon: <ProfileOutlined />,
        },
        {
          key: "logout",
          label: "Logout",
          icon: <LogoutOutlined />,
          onClick: () => handleLogout(),
        },
      ]
    : [
        {
          key: "login",
          label: "Login",
          icon: <LoginOutlined />,
          onClick: () => navigate("/login"),
        },
      ];

  const content = (
    <div>
      {user && (
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 12 }}
        >
          <Avatar size="large" icon={<UserOutlined />} />
          <div style={{ marginLeft: 12 }}>
            <div style={{ fontWeight: 600 }}>{user?.nama}</div>
          </div>
        </div>
      )}

      <Menu
        items={items}
        style={{
          borderRadius: borderRadiusLG,
        }}
      />
    </div>
  );

  return (
    <Popover content={content} trigger="click" placement="bottomRight">
      <Flex
        align="center"
        gap={10}
        style={{
          cursor: "pointer",
          padding: "0 10px",
        }}
      >
        <Avatar icon={<UserOutlined />} size="default" />
        {user?.nama && <span>{user?.nama}</span>}
      </Flex>
    </Popover>
  );
};

export default UserMenu;
