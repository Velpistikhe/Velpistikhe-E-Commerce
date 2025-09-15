import {
  DashboardOutlined,
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  ProductOutlined,
  SettingOutlined,
  SmallDashOutlined,
  SunOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Flex,
  Layout,
  Menu,
  Space,
  Switch,
  theme,
  Typography,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useCallback, useMemo } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import logo from "../logo.png";
import UserMenu from "./UserMenu";
import useCollapseMenu from "../hooks/useCollapseMenu";

const Layouts = ({ darkMode, setDarkMode }) => {
  const [collapsed, setCollapsed] = useCollapseMenu();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: <Link to="/admin/dashboard">Dashboard</Link>,
    },
    {
      key: "2",
      icon: <ProductOutlined />,
      label: "Products",
      children: [
        {
          key: "2-1",
          icon: <SmallDashOutlined />,
          label: <Link to="/admin/products">List</Link>,
        },
      ],
    },
    {
      key: "3",
      icon: <SettingOutlined />,
      label: "Pengaturan",
      children: [
        {
          key: "3-1",
          icon: <UserOutlined />,
          label: <Link to="/admin/user">User</Link>,
        },
      ],
    },
  ];

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, [setCollapsed]);

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
            background: colorBgContainer,
            cursor: "pointer",
            padding: 0,
          }}
          onClick={() => navigate("/")}
        >
          <Flex align="center" style={{ height: "100%", overflow: "hidden" }}>
            <img
              style={{
                backgroundColor: "black",
                height: 37,
                width: 37,
                borderRadius: "100%",
                padding: 5,
                margin: "0 7px",
              }}
              src={logo}
              alt="logo"
            />
            {!collapsed && (
              <h1 style={{ whiteSpace: "nowrap" }}>Velpistikhe E-Shop</h1>
            )}
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
            padding: "0 16px 0 0",
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
          <Space>
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              checkedChildren={<SunOutlined />}
              unCheckedChildren={<MoonOutlined />}
            />
            <UserMenu />
          </Space>
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
        <Footer style={{ textAlign: "center" }}>
          <Flex justify="center" align="center" wrap="wrap" gap="small">
            <Space size="middle">
              <GithubOutlined style={{ fontSize: "20px" }} />
              <InstagramOutlined style={{ fontSize: "20px" }} />
              <FacebookOutlined style={{ fontSize: "20px" }} />
            </Space>
            <Typography.Text type="secondary">
              <Flex gap="small" wrap="wrap" justify="center">
                <p style={{ margin: 0, padding: 0 }}>
                  © {new Date().getFullYear()} Velpistikhe E-Shop.
                </p>
                <p style={{ margin: 0, padding: 0 }}>All Rights Reserved.</p>
              </Flex>
            </Typography.Text>
          </Flex>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Layouts;
