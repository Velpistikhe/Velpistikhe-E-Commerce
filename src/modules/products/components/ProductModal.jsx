import { Modal } from "antd";
import ProductForm from "./ProductForm";
import usePost from "../../../hooks/usePost";

const ProductModal = ({ open, setOpen, refetch }) => {
  const onCancel = () => {
    setOpen(false);
  };

  const { postData, loading } = usePost({
    endpoint: "produk",
    title: "Produk",
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
      width={"80vw"}
      style={{ textAlign: "center" }}
    >
      <h1>Tambah Product</h1>
      <ProductForm method={postData} />
    </Modal>
  );
};

export default ProductModal;
