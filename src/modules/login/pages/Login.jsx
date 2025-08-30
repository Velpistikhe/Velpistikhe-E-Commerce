import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: colorBgContainer }}>
      <Content>
        <h1>Login</h1>
        <LoginForm />
      </Content>
    </Layout>
  );
};

export default Login;
