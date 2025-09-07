import { Button, Space } from "antd";
import DataTable from "../../../components/DataTable";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";

const AdminProductData = ({
  itemDatas,
  params,
  setParams,
  loading,
  isFetched,
}) => {
  const columns = [
    {
      align: "center",
      filter: true,
      sorter: true,
      key: "aksi",
      title: "Aksi",
      render: (val, row) => (
        <Space>
          <Button color="danger" variant="outlined" icon={<DeleteOutlined />} />
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
    <DataTable
      columns={columns}
      datas={itemDatas}
      loading={loading || !isFetched}
      params={params}
      setParams={setParams}
      size={"small"}
    />
  );
};

export default AdminProductData;
