import { Flex, Form, Input } from "antd";
import { ButtonSubmit } from "../../../components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import useHandleApiError from "../../../hooks/useHandleApiError";
import { useNotification } from "../../../context/NotificationContext";
import { login } from "../authSlice";

const LoginForm = ({ setOpen = () => null, navigate = () => null }) => {
  const dispacth = useDispatch();
  const { loadingLogin } = useSelector((state) => state.auth);
  const { handleApiError } = useHandleApiError();
  const { notify } = useNotification();

  const onFinish = async (credentials) => {
    try {
      const message = await dispacth(login(credentials)).unwrap();

      setOpen(false);

      notify({
        type: "success",
        title: "Login",
        message,
      });

      navigate("/");
    } catch (error) {
      handleApiError({ error, title: "Login" });
    }
  };

  return (
    <Form onFinish={onFinish} labelCol={{ span: 10 }} labelAlign="left">
      <Form.Item
        label={"Username"}
        name={"username"}
        rules={[{ required: true, message: "Username kosong" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={"Password"}
        name={"password"}
        rules={[{ required: true, message: "Username kosong" }]}
      >
        <Input.Password />
      </Form.Item>
      <Flex justify="right">
        <ButtonSubmit disable={loadingLogin} loading={loadingLogin}>
          Login
        </ButtonSubmit>
      </Flex>
    </Form>
  );
};

export default LoginForm;
