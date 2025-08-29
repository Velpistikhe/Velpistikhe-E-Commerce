import { useState } from "react";
import { Flex, Space } from "antd";
import ItemsData from "../components/ItemsData";
import { ButtonAddModal } from "../../../components/Buttons";
import ItemsModal from "../components/ItemsModal";
import useGets from "../../../hooks/useGets";

const Items = () => {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [name, setName] = useState(null);
  const {
    data: itemDatas,
    loading,
    hasFetched,
    refetch,
  } = useGets({ endpoint: "items", responseKey: "items" });

  return (
    <>
      <Flex justify="space-between" align="center">
        <h1>Items</h1>
        <Space>
          <ButtonAddModal setOpen={setOpenModalAdd} setName={setName} />
        </Space>
      </Flex>
      <ItemsData
        itemDatas={itemDatas}
        loading={loading}
        hasFetched={hasFetched}
      />
      {openModalAdd && (
        <ItemsModal
          open={openModalAdd}
          setOpen={setOpenModalAdd}
          name={name}
          refetch={refetch}
        />
      )}
    </>
  );
};

export default Items;
