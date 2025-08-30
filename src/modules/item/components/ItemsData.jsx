import DataTable from "../../../components/DataTable";

const ItemsData = ({ itemDatas, params, setParams, loading, isFetched }) => {
  const columns = [
    {
      align: "center",
      filter: true,
      sorter: true,
      key: "barcode",
      title: "Barcode",
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
      key: "jenis",
      title: "Jenis",
    },
    {
      align: "center",
      filter: true,
      sorter: true,
      key: "berat",
      title: "Berat",
      render: (val) => val.toLocaleString(),
    },
    {
      align: "center",
      filter: true,
      sorter: true,
      key: "satuan",
      title: "Satuan",
    },
    {
      align: "center",
      filter: true,
      sorter: true,
      key: "perusahaan",
      title: "Perusahaan",
    },
    {
      align: "center",
      filter: true,
      sorter: true,
      key: "harga",
      title: "Harga (Rp)",
      render: (val) => val.toLocaleString(),
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

export default ItemsData;
