import { useParams } from "react-router";
import { Flex } from "antd";
import useGet from "../../../hooks/useGet";
import Loading from "../../../components/Loading";
import ProductCardImage from "../components/ProductCardImage";
import { useEffect, useState } from "react";
import ProductDescription from "../components/ProductDescription";
import ProductOrderPanel from "../components/ProductOrderPanel";

const Product = () => {
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
      <Flex justify="space-between" gap={"large"}>
        <ProductCardImage data={data} />

        {data?.produk && <ProductDescription data={data} />}

        <ProductOrderPanel orderDetail={orderDetail} onChange={onChange} />
      </Flex>
    </>
  );
};

export default Product;
