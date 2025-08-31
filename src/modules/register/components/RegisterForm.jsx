import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router";
import usePost from "../../../hooks/usePost";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { postData, loading } = usePost({
    endpoint: "user",
    reset: () => navigate("/login"),
  });
  const onFinish = (values) => {
    postData({ data: values });
  };

  return (
    <>
      <Form onFinish={onFinish}>
        <Form.Item
          label={"Username"}
          name={"username"}
          rules={[{ required: true, message: "Username tidak boleh kosong" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Nama"}
          name={"nama"}
          rules={[{ required: true, message: "Nama tidak boleh kosong" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Password"}
          name={"password"}
          rules={[{ required: true, message: "Password tidak boleh kosong" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={loading}
            loading={loading}
          >
            Daftar
          </Button>
        </Form.Item>
      </Form>
      <p>
        Punya akun? <Link to={"/login"}>Masuk</Link>
      </p>
    </>
  );
};

export default RegisterForm;
