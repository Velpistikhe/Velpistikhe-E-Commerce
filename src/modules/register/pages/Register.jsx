import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout style={{ minHeight: "100vh", backgroundColor: colorBgContainer }}>
        <Content>
          <h1>Registrasi</h1>
          <RegisterForm />
        </Content>
      </Layout>
    </>
  );
};

export default Register;
