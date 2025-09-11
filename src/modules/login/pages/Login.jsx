import { theme } from "antd";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router";

const Login = () => {
  const {
    token: { colorBorder, borderRadiusLG },
  } = theme.useToken();

  return (
    <div
      style={{
        border: "solid 1px",
        borderColor: colorBorder,
        borderRadius: borderRadiusLG,
        margin: "auto",
        padding: 24,
        width: 295,
        overflow: "scroll",
      }}
    >
      <h1>Login</h1>
      <LoginForm />
      <p>
        Belum Punya Akun? <Link to={"/register"}>Buat Akun</Link>
      </p>
    </div>
  );
};

export default Login;
