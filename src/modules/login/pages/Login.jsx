import { Grid, theme } from "antd";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const Login = () => {
  const screen = Grid.useBreakpoint();
  const [divStyle, setDivStyle] = useState({ width: 350 });
  const {
    token: { colorBorder, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    if (screen.xs) {
      return setDivStyle({
        width: "100%",
      });
    }

    return setDivStyle({
      width: 350,
    });
  }, [screen]);

  return (
    <div
      style={{
        ...divStyle,
        border: "solid 1px",
        borderColor: colorBorder,
        borderRadius: borderRadiusLG,
        margin: "auto",
        padding: 24,
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
