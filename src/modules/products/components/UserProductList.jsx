import { Card, Row, Col, theme } from "antd";
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
    <div style={{ padding: "2rem" }}>
      <Row gutter={[24, 24]} justify="center">
        {data?.produks.map((product, key) => (
          <Col xs={12} sm={12} md={12} lg={4} key={key}>
            <Card
              hoverable
              onClick={() => navigate(`product/${product.id}`)}
              cover={
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    alt={product.nama}
                    crossOrigin="anonymous"
                    src={product.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              }
              style={{ borderRadius: borderRadiusLG, overflow: "hidden" }}
            >
              <Card.Meta
                title={product.nama}
                description={`Rp. ${product.harga.toLocaleString()}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UserProductList;
