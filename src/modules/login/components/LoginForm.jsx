import { Flex, Form, Input } from "antd";
import { useAuth } from "../../../context/AuthContext";
import { useRef } from "react";
import { ButtonSubmit } from "../../../components/Buttons";

const LoginForm = () => {
  const { login, loading } = useAuth();
  const isSubmitting = useRef(false);

  const onFinish = (val) => {
    if (isSubmitting.current) return;
    isSubmitting.current = true;

    try {
      login(val);
    } finally {
      isSubmitting.current = false;
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
        <ButtonSubmit disable={loading} loading={loading}>
          Login
        </ButtonSubmit>
      </Flex>
    </Form>
  );
};

export default LoginForm;
