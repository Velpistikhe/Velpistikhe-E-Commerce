import { useParams } from "react-router";
import { Flex, Grid, Space } from "antd";
import useGet from "../../../hooks/useGet";
import Loading from "../../../components/Loading";
import ProductCardImage from "../components/ProductCardImage";
import { useEffect, useState } from "react";
import ProductDescription from "../components/ProductDescription";
import ProductOrderPanel from "../components/ProductOrderPanel";
import { ButtonBackUrl } from "../../../components/Buttons";

const Product = () => {
  const screens = Grid.useBreakpoint();
  const { id } = useParams();
  const { data, loading, isFetched } = useGet({
    id,
    endpoint: "produk",
    title: "Produk",
  });

  const [orderDetail, setOrderDetail] = useState({
    jumlah: 1,
    subTotal: 0,
  });

  const onChange = (val) => {
    setOrderDetail({
      jumlah: val,
      subTotal: val * data?.produk?.harga,
    });
  };

  useEffect(() => {
    if (!data) return;

    setOrderDetail({ jumlah: 1, subTotal: data?.produk?.harga });
  }, [data]);

  if (loading && !isFetched) return <Loading />;

  return (
    <>
      <Space align="top" gap={"small"}>
        {!screens.xs && <ButtonBackUrl />}
        <Flex
          justify="space-between"
          gap="large"
          wrap="wrap"
          style={{ margin: "0 auto" }}
        >
          <ProductCardImage data={data} />

          {data?.produk && <ProductDescription data={data} />}

          <ProductOrderPanel orderDetail={orderDetail} onChange={onChange} />
        </Flex>
      </Space>
    </>
  );
};

export default Product;
