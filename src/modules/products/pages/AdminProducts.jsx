import AdminProductData from "../components/AdminProductData";
import useGets from "../../../hooks/useGets";
import { Button, Flex } from "antd";
import ProductModal from "../components/ProductModal";
import { useState } from "react";

const AdminProducts = () => {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const { data, loading, isFetched, refetch, setParams } = useGets({
    endpoint: "produk",
    name: "Produk",
    initialParams: {
      page: 1,
      limit: 10,
    },
  });

  return (
    <>
      <Flex align="center" justify="space-between">
        <h1>Product</h1>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            setOpenModalAdd(true);
          }}
        >
          Tambah
        </Button>
      </Flex>
      <AdminProductData
        itemDatas={data?.produks}
        params={data?.pagination}
        setParams={setParams}
        loading={loading}
        isFetched={isFetched}
      />
      <ProductModal
        open={openModalAdd}
        setOpen={setOpenModalAdd}
        refetch={refetch}
      />
    </>
  );
};

export default AdminProducts;
