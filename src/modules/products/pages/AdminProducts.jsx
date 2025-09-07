import AdminProductData from "../components/AdminProductData";
import { Flex } from "antd";
import { useState } from "react";
import { ButtonAddModal } from "../../../components/Buttons";

const AdminProducts = () => {
  const [openModalAdd, setOpenModalAdd] = useState(false);

  return (
    <>
      <Flex align="center" justify="space-between">
        <h1>Product</h1>
        <ButtonAddModal setOpen={setOpenModalAdd} />
      </Flex>
      <AdminProductData
        openModalAdd={openModalAdd}
        setOpenModalAdd={setOpenModalAdd}
      />
    </>
  );
};

export default AdminProducts;
