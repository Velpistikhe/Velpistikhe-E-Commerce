import DataTable from "../../../components/DataTable";
import useGets from "../../../hooks/useGets";

const ItemsData = () => {
  const {
    data: itemDatas,
    loading,
    hasFetched,
  } = useGets({ endpoint: "items", responseKey: "items" });
  const columns = [
    {
      align: "center",
      filter: true,
      sorter: true,
      key: "barcode",
      title: "Barcode",
    },
  ];

  return (
    <DataTable
      columns={columns}
      datas={itemDatas}
      loading={loading || !hasFetched}
    />
  );
};

export default ItemsData;
