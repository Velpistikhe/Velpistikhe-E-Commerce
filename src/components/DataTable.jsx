import { Table } from "antd";

const DataTable = ({ columns, datas, loading }) => {
  const newColumns = columns.map((col) => {
    return {
      align: col.align,
      filter: col.filter,
      sorter: col.sorter,
      dataIndex: col.key,
      title: col.title,
      render: col.render,
    };
  });

  const newDatas = datas.map((data, index) =>
    Object.assign(data, { key: data.id || index })
  );

  return <Table columns={newColumns} dataSource={newDatas} loading={loading} />;
};

export default DataTable;
