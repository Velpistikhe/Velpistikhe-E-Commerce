import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { useRef } from "react";

const DataTable = ({ columns, datas, loading, params, setParams, size }) => {
  const searchInput = useRef(null);
  const handleSearch = (confirm) => {
    confirm();
  };

  const handleReset = (clearFilters) => {
    clearFilters();
  };
  const filterProps = (dataIndex) => ({
    filterDropdown: ({
      selectedKeys,
      setSelectedKeys,
      clearFilters,
      confirm,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          id={dataIndex.toLowerCase()}
          name={dataIndex.toLowerCase()}
          ref={searchInput}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(confirm)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(confirm)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
  });

  const newColumns = columns.map((col) => {
    return {
      align: col.align,
      ...filterProps(col.key),
      sorter: col.sorter,
      dataIndex: col.key,
      title: col.title,
      render: col.render,
    };
  });

  const handleOnChange = (paginationParams, filters, sort) => {
    const newFilter = Object.fromEntries(
      Object.entries(filters).map(([key, value]) => {
        if (Array.isArray(value)) {
          return [key, value[0] ?? null];
        }

        return [key, value];
      })
    );

    setParams({
      ...newFilter,
      sort: sort.field,
      order: sort.order === "ascend" ? "asc" : "desc",
      page: paginationParams.current,
      limit: paginationParams.pageSize,
    });
  };

  const newDatas = datas?.map((data, index) =>
    Object.assign(data, { key: data.id || index })
  );

  return (
    <Table
      columns={newColumns}
      dataSource={newDatas}
      loading={loading}
      onChange={handleOnChange}
      pagination={{ current: params?.current, total: params?.total }}
      scroll={{ x: true }}
      style={{ marginTop: 20 }}
      size={size}
    />
  );
};

export default DataTable;
