import { Button, Flex, Form, Input } from "antd";
const LoginForm = () => {
  return (
    <Form>
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
        <Input type="password" />
      </Form.Item>
      <Flex justify="right">
        <Button htmlType="submit" variant="outlined" color="primary">
          Login
        </Button>
      </Flex>
    </Form>
  );
};

export default LoginForm;
