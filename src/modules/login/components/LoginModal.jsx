import { Modal } from "antd";
import LoginForm from "./LoginForm";
import { Link } from "react-router";

const LoginModal = ({ open, setOpen }) => {
  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      destroyOnHidden={true}
      footer={false}
    >
      <h1>Login</h1>
      <LoginForm setOpen={onCancel} />
      <p>
        Belum Punya Akun? <Link to={"/register"}>Buat Akun</Link>
      </p>
    </Modal>
  );
};

export default LoginModal;
