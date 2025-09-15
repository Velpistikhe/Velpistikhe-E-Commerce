import { Button, Modal } from "antd";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { closeLoginModal } from "../authSlice";

const LoginModal = () => {
  const { loginModal } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCancel = () => {
    dispatch(closeLoginModal());
  };

  const handleRegister = () => {
    dispatch(closeLoginModal());
    navigate("/register");
  };

  return (
    <Modal
      open={loginModal}
      onCancel={onCancel}
      destroyOnHidden={true}
      footer={false}
    >
      <h1>Login</h1>
      <LoginForm setOpen={onCancel} />
      <p>
        Belum Punya Akun?{" "}
        <Button color="primary" variant="link" onClick={handleRegister}>
          Daftar
        </Button>
      </p>
    </Modal>
  );
};

export default LoginModal;
