import { Flex, Form, Input, Select, theme } from "antd";
import InputAngka from "../../../components/InputAngka";
import { ButtonSubmit } from "../../../components/Buttons";
import TextArea from "antd/es/input/TextArea";

const ProductForm = ({ method, loading }) => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const formStyle = {
    textAlign: "left",
    width: 500,
    margin: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: borderRadiusLG,
    padding: 20,
  };

  const onFinish = (e) => {
    method({ data: e });
  };

  return (
    <Form
      onFinish={onFinish}
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 18 }}
      style={formStyle}
    >
      <Form.Item
        label={"Nama Produk"}
        name={"nama"}
        rules={[{ required: true, message: "Nama Produk harus diisi" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={"Harga Produk"}
        name={"harga"}
        rules={[{ required: true, message: "Harga harus diisi" }]}
      >
        <InputAngka id={"harga"} />
      </Form.Item>
      <Form.Item
        label={"Kondisi Produk"}
        name={"kondisi"}
        rules={[{ required: true, message: "Kondisi belum dipilih" }]}
      >
        <Select
          options={[
            { value: 1, label: "Baru" },
            { value: 2, label: "Bekas" },
          ]}
        />
      </Form.Item>
      <Form.Item label={"Spesifikasi"} name={"spesifikasi"}>
        <TextArea rows={5} />
      </Form.Item>
      <Form.Item label={"Deskripsi"} name={"deskripsi"}>
        <TextArea rows={5} />
      </Form.Item>
      <Flex justify="center">
        <ButtonSubmit loading={loading} disable={loading} />
      </Flex>
    </Form>
  );
};

export default ProductForm;
