import { Button } from "antd";

export const ButtonAddModal = ({ setOpen, setName }) => {
  const onClickHandler = () => {
    setOpen(true);
    setName("Tambah");
  };
  return (
    <Button color="primary" variant="outlined" onClick={onClickHandler}>
      Tambah
    </Button>
  );
};

export const ButtonSubmit = ({ disable, loading }) => {
  return (
    <Button
      color="primary"
      disabled={disable || loading}
      htmlType="submit"
      loading={loading}
      variant="solid"
    >
      Simpan
    </Button>
  );
};
