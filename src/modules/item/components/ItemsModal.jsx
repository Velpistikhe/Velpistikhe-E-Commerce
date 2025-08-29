import { Modal } from "antd";
import ItemsForm from "./ItemsForm";
import usePost from "../../../hooks/usePost";

const ItemsModal = ({ open, setOpen, name, refetch }) => {
  const onCancel = () => {
    setOpen(false);
  };

  const { postData, loading } = usePost({
    endpoint: "item",
    refetch: refetch,
    reset: onCancel,
  });

  return (
    <Modal
      destroyOnHidden={true}
      footer={false}
      loading={loading}
      onCancel={onCancel}
      open={open}
      width={"80%"}
      style={{ textAlign: "center" }}
    >
      <h1>{name} Item</h1>
      <ItemsForm method={postData} loading={loading} />
    </Modal>
  );
};

export default ItemsModal;
