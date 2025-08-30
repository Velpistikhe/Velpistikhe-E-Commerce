import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useCallback, useMemo, useState } from "react";
import { Link, useLocation } from "react-router";
import logo from "../logo.png";

const Layouts = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const items = [
    { key: "1", icon: <HomeOutlined />, label: <Link to="/">Home</Link> },
    {
      key: "2",
      icon: <SettingOutlined />,
      label: "Setting",
      children: [
        {
          key: "2-1",
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
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            aria-label="Toggle sidebar"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
