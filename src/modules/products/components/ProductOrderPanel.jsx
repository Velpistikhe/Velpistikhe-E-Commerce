import { Button, Descriptions, Flex, Grid, Space, theme } from "antd";
import CounterInput from "../../../components/CounterInput";
import { useEffect, useState } from "react";

const ProductOrderPanel = ({ orderDetail, onChange }) => {
  const screens = Grid.useBreakpoint();
  const {
    token: { colorBgContainer, colorBorder, borderRadiusLG },
  } = theme.useToken();
  const [styleDescription, setStyleDescription] = useState(null);

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

  useEffect(() => {
    if (screens.xl || screens.md || screens.xxl)
      return setStyleDescription({
        flex: 1,
        border: `solid 1px ${colorBorder}`,
        borderRadius: borderRadiusLG,
        height: 300,
        padding: 20,
        marginTop: 44,
        position: "sticky",
        top: 80,
      });

    if (screens.xs)
      return setStyleDescription({
        bottom: 0,
        border: `solid 1px ${colorBorder}`,
        borderRadius: borderRadiusLG,
        padding: 20,
        position: "sticky",
        backgroundColor: colorBgContainer,
      });
  }, [screens, borderRadiusLG, colorBorder, colorBgContainer]);

  return (
    <Descriptions
      column={1}
      items={items1}
      title="Detil Pesanan"
      style={styleDescription}
    />
  );
};

export default ProductOrderPanel;
