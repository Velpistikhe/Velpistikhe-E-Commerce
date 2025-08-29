import { Flex, Form, Input } from "antd";
import InputAngka from "../../../components/InputAngka";
import { ButtonSubmit } from "../../../components/Buttons";

const ItemsForm = ({ method }) => {
  return (
    <>
      <Form
        onFinish={method}
        wrapperCol={{ span: 18 }}
        labelCol={{ span: 6 }}
        labelAlign="left"
        style={{
          textAlign: "left",
          width: 500,
          margin: "auto",
        }}
      >
        <Form.Item
          label={"Barcode"}
          name={"barcode"}
          rules={[{ required: true, message: "Barcode harus diisi" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Nama"}
          name={"nama"}
          rules={[{ required: true, message: "Nama harus diisi" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Jenis"}
          name={"jenis"}
          rules={[{ required: true, message: "Jenis harus diisi" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Berat"}
          name={"berat"}
          rules={[{ required: true, message: "Berat harus diisi" }]}
        >
          <InputAngka id={"berat"} />
        </Form.Item>
        <Form.Item
          label={"Satuan"}
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
          label={"Harga"}
          name={"harga"}
          rules={[{ required: true, message: "Harga harus diisi" }]}
        >
          <InputAngka id={"harga"} />
        </Form.Item>
        <Flex justify="center">
          <ButtonSubmit />
        </Flex>
      </Form>
    </>
  );
};

export default ItemsForm;
