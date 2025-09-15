import { Avatar, Flex, Menu, Popover, theme } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  ProfileOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout, openLoginModal } from "../modules/login/authSlice";
import { useNotification } from "../context/NotificationContext";
import useHandleApiError from "../hooks/useHandleApiError";

const UserMenu = () => {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { notify } = useNotification();
  const { handleApiError } = useHandleApiError();
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const handleLogout = async () => {
    try {
      const message = await dispacth(logout()).unwrap();

      notify({ type: "success", title: "Logout", message });
    } catch (error) {
      handleApiError({ error, title: "Logout" });
    }
  };

  const items = user && [
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
    <Popover content={user && content} trigger="click" placement="bottomRight">
      <Flex
        align="center"
        gap={10}
        style={{
          cursor: "pointer",
          padding: "0 10px",
        }}
      >
        <Avatar
          icon={<UserOutlined />}
          size="default"
          onClick={!user ? () => dispacth(openLoginModal()) : null}
        />
        {user?.nama && <span>{user?.nama}</span>}
      </Flex>
    </Popover>
  );
};

export default UserMenu;
