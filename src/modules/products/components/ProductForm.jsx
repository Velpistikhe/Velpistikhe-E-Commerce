import { Form, Input, Select, theme, Upload } from "antd";
import InputAngka from "../../../components/InputAngka";
import { ButtonSubmit } from "../../../components/Buttons";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const ProductForm = ({ method, loading }) => {
  const [fileList, setFileList] = useState([]);
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const formStyle = {
    textAlign: "left",
    margin: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: borderRadiusLG,
    padding: 20,
  };

  const onFinish = (values) => {
    const formData = new FormData();

    formData.append("nama", values.nama);
    formData.append("harga", values.harga);
    formData.append("kondisi", values.kondisi);
    formData.append("spesifikasi", values.spesifikasi || "");
    formData.append("deskripsi", values.deskripsi || "");

    fileList.forEach((file) => {
      formData.append("file", file.originFileObj);
    });

    method({ formData: formData });
  };

  const uploadButton = (
    <button
      style={{ border: 0, background: "none", cursor: "pointer" }}
      type="button"
    >
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const handleBeforeUpload = (file) => {
    return false;
  };

  const onChange = (info) => {
    setFileList(info.fileList);
  };

  return (
    <Form
      encType="multipart/form-data"
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
      <Form.Item label={"Foto"}>
        <Upload
          accept="image"
          beforeUpload={handleBeforeUpload}
          listType="picture-card"
          maxCount={5}
          onChange={onChange}
          showUploadList={{ showPreviewIcon: false }}
        >
          {uploadButton}
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <ButtonSubmit loading={loading} disable={loading} />
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
