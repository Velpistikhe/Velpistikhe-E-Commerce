import { Outlet, useNavigate } from "react-router";
import { Layout, Space, Switch, theme, Typography } from "antd";
import Title from "antd/es/typography/Title";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import UserMenu from "./UserMenu";

const { Header, Content, Footer } = Layout;

const UserLayout = ({ darkMode, setDarkMode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 16px",
          backgroundColor: colorBgContainer,
        }}
      >
        <Title
          level={3}
          style={{ margin: 0, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Vepistikhe E-Shop
        </Title>

        <Space size="large" align="center">
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
        <Space size="large">
          <GithubOutlined style={{ fontSize: "20px" }} />
          <InstagramOutlined style={{ fontSize: "20px" }} />
          <FacebookOutlined style={{ fontSize: "20px" }} />
        </Space>
        <Typography.Text type="secondary" style={{ marginLeft: 8 }}>
          © {new Date().getFullYear()} Velpistikhe E-Shop. All Rights Reserved.
        </Typography.Text>
      </Footer>
    </Layout>
  );
};

export default UserLayout;
