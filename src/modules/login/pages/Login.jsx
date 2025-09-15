import { Button, Grid, theme } from "antd";
import LoginForm from "../components/LoginForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
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
      <LoginForm navigate={navigate} />
      <p>
        Belum Punya Akun?{" "}
        <Button
          color="primary"
          variant="link"
          onClick={() => navigate("/register")}
        >
          Daftar
        </Button>
      </p>
    </div>
  );
};

export default Login;
