import { Modal } from "antd";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router";

const Login = ({ open, setOpen }) => {
  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      destroyOnHidden={true}
      footer={false}
      onCancel={onCancel}
      open={open}
      width={"80%"}
    >
      <h1>Login</h1>
      <LoginForm />
      <p>
        Belum Punya Akun? <Link to={"/register"}>Buat Akun</Link>
      </p>
    </Modal>
  );
};

export default Login;
