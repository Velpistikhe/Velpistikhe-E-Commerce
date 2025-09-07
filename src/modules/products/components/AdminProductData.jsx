import { Button, Space } from "antd";
import DataTable from "../../../components/DataTable";
import { EyeOutlined } from "@ant-design/icons";
import useGets from "../../../hooks/useGets";
import ProductModal from "./ProductModal";
import { ButtonDelete } from "../../../components/Buttons";

const AdminProductData = ({ openModalAdd, setOpenModalAdd }) => {
  const { data, loading, isFetched, refetch, setParams } = useGets({
    endpoint: "produk",
    name: "Produk",
    initialParams: {
      page: 1,
      limit: 10,
    },
  });

  const columns = [
    {
      align: "center",
      filter: true,
      sorter: true,
      key: "aksi",
      title: "Aksi",
      render: (val, row) => (
        <Space>
          <ButtonDelete
            id={row.id}
            refetch={refetch}
            endpoint={"produk"}
            title={"Produk"}
          />
          <Button color="green" variant="outlined" icon={<EyeOutlined />} />
        </Space>
      ),
    },
    {
      align: "center",
      filter: true,
      sorter: true,
      key: "nama",
      title: "Nama",
    },
    {
      align: "center",
      filter: true,
      sorter: true,
      key: "harga",
      title: "Harga (Rp)",
      render: (val) => val.toLocaleString(),
    },
    {
      align: "left",
      filter: true,
      sorter: true,
      key: "spesifikasi",
      title: "Spesifikasi",
    },
    {
      align: "left",
      filter: true,
      sorter: true,
      key: "deskripsi",
      title: "Deskripsi",
    },
  ];

  return (
    <>
      <DataTable
        columns={columns}
        datas={data?.produks || []}
        loading={loading || !isFetched}
        params={data?.pagination}
        setParams={setParams}
        size={"small"}
      />

      <ProductModal
        open={openModalAdd}
        setOpen={setOpenModalAdd}
        refetch={refetch}
      />
    </>
  );
};

export default AdminProductData;
