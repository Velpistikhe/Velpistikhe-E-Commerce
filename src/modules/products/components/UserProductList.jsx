import { Card, theme, Flex, Image } from "antd";
import useGets from "../../../hooks/useGets";
import Loading from "../../../components/Loading";
import { useNavigate } from "react-router";

const UserProductList = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const { data, loading } = useGets({ endpoint: "produk" });
  const navigate = useNavigate();

  if (loading) return <Loading />;

  return (
    <Flex gap="large" justify="center" wrap="wrap">
      {data?.produks.map((product, key) => (
        <Card
          key={key}
          hoverable
          onClick={() => navigate(`product/${product.id}`)}
          cover={
            <div style={{}}>
              <Image
                preview={false}
                alt={product.nama}
                crossOrigin="anonymous"
                height={300}
                src={product.image}
                style={{
                  objectFit: "cover",
                }}
                width={300}
              />
            </div>
          }
          style={{
            borderRadius: borderRadiusLG,
            width: 300,
            overflow: "hidden",
          }}
        >
          <Card.Meta
            title={product.nama}
            description={`Rp. ${product.harga.toLocaleString()}`}
          />
        </Card>
      ))}
    </Flex>
  );
};

export default UserProductList;
