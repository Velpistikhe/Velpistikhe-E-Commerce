import { Flex, Form, Input } from "antd";
import { Link, useNavigate } from "react-router";
import usePost from "../../../hooks/usePost";
import { ButtonSubmit } from "../../../components/Buttons";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { postData, loading } = usePost({
    endpoint: "user",
    title: "Register",
    reset: () => navigate("/login"),
  });

  const onFinish = (values) => {
    postData({ formData: values });
  };

  return (
    <>
      <Form onFinish={onFinish} labelCol={{ span: 9 }} labelAlign="left">
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
        <Flex justify="right">
          <ButtonSubmit disable={loading} loading={loading}>
            Daftar
          </ButtonSubmit>
        </Flex>
      </Form>
      <p>
        Punya akun? <Link to={"/login"}>Masuk</Link>
      </p>
    </>
  );
};

export default RegisterForm;
