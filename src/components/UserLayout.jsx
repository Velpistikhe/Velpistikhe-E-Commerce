import { Outlet, useLocation, useNavigate } from "react-router";
import {
  Badge,
  Flex,
  Grid,
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
import { ButtonBackUrl } from "./Buttons";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../modules/login/components/LoginModal";
import { openLoginModal } from "../modules/login/authSlice";

const { Header, Content, Footer } = Layout;

const UserLayout = ({ darkMode, setDarkMode }) => {
  const { user } = useSelector((state) => state.auth);
  const { product } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const screens = Grid.useBreakpoint();
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleClickCart = () => {
    if (user && user.role !== "Admin" && user.role !== "Staff") {
      return navigate(`/user/cart/${user.id}`);
    }

    dispatch(openLoginModal());
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          alignContent: "center",
          backgroundColor: colorBgContainer,
          padding: "0 16px",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Flex
          style={{
            margin: "auto",
            width: "98%",
          }}
          align="center"
          gap="small"
          justify="space-between"
        >
          {screens.xs && location.pathname.includes("/product") && (
            <ButtonBackUrl />
          )}
          {screens.xs && !location.pathname.includes("/product") && (
            <img
              onClick={() => navigate("/")}
              style={{
                cursor: "pointer",
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
          )}
          {!screens.xs && (
            <Flex>
              <img
                onClick={() => navigate("/")}
                style={{
                  cursor: "pointer",
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
              <Title
                onClick={() => navigate("/")}
                level={3}
                style={{ margin: 0, cursor: "pointer" }}
              >
                Velpistikhe E-Shop
              </Title>
            </Flex>
          )}

          <div style={{ flex: 5 }}>
            <Input />
          </div>

          <Flex align="center" justify="right" style={{ flex: 1 }}>
            {user?.role !== "Admin" && user?.role !== "Staff" && (
              <Badge count={product.length}>
                <ShoppingCartOutlined
                  style={{
                    cursor: "pointer",
                    fontSize: 24,
                  }}
                  onClick={handleClickCart}
                />
              </Badge>
            )}
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
          alignContent: "center",
          margin: "24px 16px",
          padding: 24,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Outlet />
        {location.pathname !== "/register" && <LoginModal />}
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
  );
};

export default UserLayout;
