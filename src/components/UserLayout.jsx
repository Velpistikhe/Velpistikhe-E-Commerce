import { Outlet, useNavigate } from "react-router";
import {
  Badge,
  Flex,
  Input,
  Layout,
  Space,
  Switch,
  theme,
  Typography,
} from "antd";
import Title from "antd/es/typography/Title";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  MoonOutlined,
  ShoppingCartOutlined,
  SunOutlined,
} from "@ant-design/icons";
import UserMenu from "./UserMenu";
import logo from "../logo.png";

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
          alignContent: "center",
          backgroundColor: colorBgContainer,
          padding: "0 16px",
        }}
      >
        <Flex
          style={{ cursor: "pointer", margin: "auto", width: "80vw" }}
          align="center"
          justify="space-between"
        >
          <Flex onClick={() => navigate("/")}>
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
            <Title level={3} style={{ margin: 0 }}>
              Velpistikhe E-Shop
            </Title>
          </Flex>

          <Input style={{ width: "50%" }} />

          <Flex align="center">
            <Badge>
              <ShoppingCartOutlined
                style={{
                  cursor: "pointer",
                  fontSize: 24,
                }}
              />
            </Badge>
            <UserMenu />

            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              checkedChildren={<SunOutlined />}
              unCheckedChildren={<MoonOutlined />}
            />
          </Flex>
        </Flex>
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
