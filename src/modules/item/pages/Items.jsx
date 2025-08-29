import { useState } from "react";
import { Flex, Space } from "antd";
import ItemsData from "../components/ItemsData";
import { ButtonAddModal } from "../../../components/Buttons";
import ItemsModal from "../components/ItemsModal";

const Items = () => {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [name, setName] = useState(null);

  return (
    <>
      <Flex justify="space-between" align="center">
        <h1>Items</h1>
        <Space>
          <ButtonAddModal setOpen={setOpenModalAdd} setName={setName} />
        </Space>
      </Flex>
      <ItemsData />
      {openModalAdd && (
        <ItemsModal open={openModalAdd} setOpen={setOpenModalAdd} name={name} />
      )}
    </>
  );
};

export default Items;
