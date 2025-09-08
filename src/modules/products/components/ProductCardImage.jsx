import { Card, theme } from "antd";

const ProductCardImage = ({ data }) => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Card
      cover={
        <div style={{ height: "25vw", overflow: "hidden" }}>
          <img
            alt={data?.produk.nama}
            crossOrigin="anonymous"
            src={data?.produk.image[0]}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      }
      style={{
        borderRadius: borderRadiusLG,
        overflow: "hidden",
        width: "25%",
      }}
    >
      {data?.produk?.image.map((image, index) => (
        <div key={index} style={{ width: "25%" }}>
          <img
            alt={data?.produk.nama}
            crossOrigin="anonymous"
            src={image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </Card>
  );
};

export default ProductCardImage;
