import { Button, Descriptions, Flex, Space, theme } from "antd";
import CounterInput from "../../../components/CounterInput";

const ProductOrderPanel = ({ orderDetail, onChange }) => {
  const {
    token: { colorBorder, borderRadiusLG },
  } = theme.useToken();
  const items1 = [
    {
      key: "jumlah",
      labelStyle: { width: 100 },
      children: (
        <Space>
          <CounterInput defaultValue={orderDetail.jumlah} onChange={onChange} />
          STOK : 10
        </Space>
      ),
    },
    {
      key: "subtotal",
      label: "SubTotal",
      labelStyle: { width: 100 },
      contentStyle: {
        textAlign: "right",
        display: "inline",
        fontWeight: "Bold",
      },
      children: `Rp. ${orderDetail.subTotal.toLocaleString()}`,
    },
    {
      children: (
        <Flex justify="space-between" style={{ width: "100%" }}>
          <Button style={{ width: "48%" }}>Keranjang</Button>
          <Button style={{ width: "48%" }}>Beli Langsung</Button>
        </Flex>
      ),
    },
  ];

  return (
    <Descriptions
      column={1}
      items={items1}
      title="Detil Pesanan"
      style={{
        flex: 1,
        border: `solid 1px ${colorBorder}`,
        borderRadius: borderRadiusLG,
        height: 300,
        padding: 20,
        marginTop: 44,
        position: "sticky",
        top: 80,
      }}
    />
  );
};

export default ProductOrderPanel;
