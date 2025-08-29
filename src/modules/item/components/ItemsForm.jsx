import { Flex, Form, Input } from "antd";
import InputAngka from "../../../components/InputAngka";
import { ButtonSubmit } from "../../../components/Buttons";

const ItemsForm = ({ method, loading }) => {
  const formStyle = {
    textAlign: "left",
    width: 500,
    margin: "auto",
  };

  const onFinish = (e) => {
    method({ data: e });
  };

  return (
    <Form
      onFinish={onFinish}
      labelAlign="left"
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 18 }}
      style={formStyle}
    >
      <Form.Item
        label={"Barcode Produk"}
        name={"barcode"}
        rules={[{ required: true, message: "Barcode harus diisi" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={"Nama Produk"}
        name={"nama"}
        rules={[{ required: true, message: "Nama harus diisi" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={"Jenis Produk"}
        name={"jenis"}
        rules={[{ required: true, message: "Jenis harus diisi" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={"Berat Produk"}
        name={"berat"}
        rules={[{ required: true, message: "Berat harus diisi" }]}
      >
        <InputAngka id={"berat"} />
      </Form.Item>
      <Form.Item
        label={"Satuan Berat"}
        name={"satuan"}
        rules={[{ required: true, message: "Satuan harus diisi" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={"Perusahaan"}
        name={"perusahaan"}
        rules={[{ required: true, message: "Perusahaan harus diisi" }]}
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
      <Flex justify="center">
        <ButtonSubmit loading={loading} disable={loading} />
      </Flex>
    </Form>
  );
};

export default ItemsForm;
