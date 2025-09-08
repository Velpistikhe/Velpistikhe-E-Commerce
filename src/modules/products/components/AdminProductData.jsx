import { Button, Space, Tooltip, Typography } from "antd";
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
      key: "spesifikasi",
      title: "Spesifikasi",
      width: 300,
      render: (val) => (
        <Tooltip title={val}>
          <Typography.Paragraph
            ellipsis={{
              rows: 2,
            }}
          >
            {val}
          </Typography.Paragraph>
        </Tooltip>
      ),
    },
    {
      align: "left",
      key: "deskripsi",
      title: "Deskripsi",
      width: 300,
      render: (val) => (
        <Tooltip title={val}>
          <Typography.Paragraph
            ellipsis={{
              rows: 2,
            }}
          >
            {val}
          </Typography.Paragraph>
        </Tooltip>
      ),
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
