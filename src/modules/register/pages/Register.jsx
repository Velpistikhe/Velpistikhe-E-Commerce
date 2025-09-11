import { Grid, theme } from "antd";
import RegisterForm from "../components/RegisterForm";
import { useEffect, useState } from "react";

const Register = () => {
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
      <h1>Registrasi</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;
