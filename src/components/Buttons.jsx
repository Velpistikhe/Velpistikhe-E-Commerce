import { ArrowLeftOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import useDelete from "../hooks/useDelete";
import { useNavigate } from "react-router";

export const ButtonAddModal = ({ setOpen }) => {
  const onClickHandler = () => {
    setOpen(true);
  };

  return (
    <Button color="primary" variant="outlined" onClick={onClickHandler}>
      Tambah
    </Button>
  );
};

export const ButtonSubmit = ({ disable, loading, children }) => {
  return (
    <Button
      color="primary"
      disabled={disable || loading}
      htmlType="submit"
      loading={loading}
      variant="solid"
    >
      {children}
    </Button>
  );
};

export const ButtonDelete = ({ id, endpoint, title, refetch }) => {
  const { deleteData, loading } = useDelete({
    endpoint,
    title,
    refetch,
  });

  const confirm = () => {
    deleteData(id);
  };

  return (
    <Popconfirm
      title={`Hapus ${title}`}
      description={`Apakah anda yakin ingin menghapus ${title?.toLowerCase()}?`}
      onConfirm={confirm}
      okText="Ya"
      cancelText="Tidak"
    >
      <Button
        danger
        disabled={loading}
        icon={<DeleteOutlined />}
        loading={loading}
        variant="outlined"
      />
    </Popconfirm>
  );
};

export const ButtonBackUrl = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <Button variant="outlined" icon={<ArrowLeftOutlined />} onClick={onClick} />
  );
};
