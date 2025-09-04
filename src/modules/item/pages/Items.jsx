import { useState } from "react";
import { Flex, Space } from "antd";
import ItemsData from "../components/ItemsData";
import { ButtonAddModal } from "../../../components/Buttons";
import ItemsModal from "../components/ItemsModal";
import useGets from "../../../hooks/useGets";

const Items = () => {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [name, setName] = useState(null);
  const { data, loading, isFetched, refetch, setParams } = useGets({
    endpoint: "item",
    name: "Item",
    initialParams: {
      page: 1,
      limit: 10,
    },
  });

  return (
    <>
      <Flex justify="space-between" align="center">
        <h1>Items</h1>
        <Space>
          <ButtonAddModal setOpen={setOpenModalAdd} setName={setName} />
        </Space>
      </Flex>
      <ItemsData
        itemDatas={data?.items}
        params={data?.pagination}
        setParams={setParams}
        loading={loading}
        isFetched={isFetched}
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
