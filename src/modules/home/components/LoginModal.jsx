import { Modal } from "antd";
import LoginForm from "./Login";

const LoginModal = ({ open, setOpen }) => {
  return (
    <Modal>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
