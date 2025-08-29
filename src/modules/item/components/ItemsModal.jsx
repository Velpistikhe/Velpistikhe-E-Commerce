import { Modal } from "antd";
import ItemsForm from "./ItemsForm";

const ItemsModal = ({ open, setOpen, name }) => {
  const onCancel = () => {
    setOpen(false);
  };

  const method = (e) => {
    console.log(e);
  };

  return (
    <Modal
      destroyOnHidden={true}
      footer={false}
      onCancel={onCancel}
      open={open}
      width={"80%"}
      style={{ textAlign: "center" }}
    >
      <h1>{name} Item</h1>
      <ItemsForm method={method} />
    </Modal>
  );
};

export default ItemsModal;
