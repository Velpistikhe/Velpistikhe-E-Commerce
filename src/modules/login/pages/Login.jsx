import LoginForm from "../components/LoginForm";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
      <p>
        Belum Punya Akun? <Link to={"/register"}>Buat Akun</Link>
      </p>
    </>
  );
};

export default Login;
