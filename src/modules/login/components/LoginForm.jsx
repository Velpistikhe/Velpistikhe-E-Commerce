import { Button, Flex, Form, Input } from "antd";
import { useAuth } from "../../../context/AuthContext";

const LoginForm = () => {
  const { login, loading } = useAuth();
  const onFinish = (val) => {
    login(val);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label={"username"}
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
        <Button
          htmlType="submit"
          variant="outlined"
          color="primary"
          disabled={loading}
          loading={loading}
        >
          Login
        </Button>
      </Flex>
    </Form>
  );
};

export default LoginForm;
