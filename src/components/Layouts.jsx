import {
  FolderOpenOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SendOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Flex,
  Layout,
  Menu,
  Popover,
  Space,
  theme,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useCallback, useContext, useMemo, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import logo from "../logo.png";
import { AuthContext } from "../context/AuthContext";

const Layouts = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG, colorBorder },
  } = theme.useToken();

  const handleLogout = async () => {
    await logout();

    navigate("/login");
  };

  const content = (
    <div style={{ padding: 16, width: 250 }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <Avatar size="large" icon={<UserOutlined />} />
        <div style={{ marginLeft: 12 }}>
          <div style={{ fontWeight: 600 }}>{user.nama}</div>
        </div>
      </div>
      <Button type="primary" danger block onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );

  const items = [
    { key: "1", icon: <HomeOutlined />, label: <Link to="/">Home</Link> },
    {
      key: "2",
      icon: <FolderOpenOutlined />,
      label: "Modules",
      children: [
        {
          key: "2-1",
          icon: <SendOutlined />,
          label: <Link to="/item">Item</Link>,
        },
      ],
    },
    {
      key: "3",
      icon: <SettingOutlined />,
      label: "Setting",
      children: [
        {
          key: "3-1",
          icon: <UserOutlined />,
          label: <Link to="/user">User</Link>,
        },
      ],
    },
  ];
  const toggleCollapsed = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  const location = useLocation();
  const selectedKey = useMemo(() => {
    if (location.pathname === "/") return ["1"];
    if (location.pathname.startsWith("/user")) return ["2-1"];
    return [];
  }, [location.pathname]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={50}
        width={300}
        style={{ background: colorBgContainer }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Flex style={{ height: "100%" }} align="center">
            <img
              style={{
                height: "100%",
                borderRadius: "100%",
                padding: 10,
              }}
              src={logo}
              alt="logo"
            />
            <h1 style={{ display: "inline-block" }}>Velpistikhe</h1>
          </Flex>
        </Header>
        <Menu
          mode="inline"
          selectedKeys={selectedKey}
          items={items}
          style={{ marginTop: "20px" }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            aria-label="Toggle sidebar"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
          <Popover content={content} trigger="click" placement="bottomRight">
            <Flex
              style={{
                borderColor: colorBorder,
                borderRadius: borderRadiusLG,
                borderStyle: "solid",
                borderWidth: 1,
                cursor: "pointer",
                height: "80%",
                marginRight: 15,
                padding: 10,
              }}
              align="center"
            >
              <Avatar icon={<UserOutlined />} size="default" />
              <span style={{ marginLeft: 10 }}>{user.nama}</span>
            </Flex>
          </Popover>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
