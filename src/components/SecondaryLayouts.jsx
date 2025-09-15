import { Flex, Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router";
import logo from "../logo.png";

const SecondaryLayouts = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: colorBgContainer }}>
      <Content
        style={{
          margin: "auto",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        <Flex
          align="center"
          justify="center"
          gap={"small"}
          style={{ cursor: "pointer" }}
          onClick={handleOnClick}
        >
          <img
            onClick={() => navigate("/")}
            style={{
              cursor: "pointer",
              backgroundColor: "black",
              height: 50,
              width: 50,
              borderRadius: "100%",
              padding: 5,
              margin: "0 7px",
            }}
            src={logo}
            alt="logo"
          />
          <h1>Velpistikhe E-Shop</h1>
        </Flex>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default SecondaryLayouts;
