import { Card, Row, Col, theme } from "antd";

const products = [
  {
    id: 1,
    name: "Jaket Keren",
    price: "Rp250.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1193423704/display_1500/stock-photo-mens-black-leather-jacket-isolated-on-white-background-1193423704.jpg",
  },
  {
    id: 2,
    name: "Sneakers Putih",
    price: "Rp350.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2483704499/display_1500/stock-photo-lviv-ukraine-may-white-sneakers-with-blue-inserts-on-wooden-background-stylish-new-2483704499.jpg",
  },
  {
    id: 3,
    name: "T-Shirt Minimalis",
    price: "Rp120.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2535585467/display_1500/stock-photo-blank-white-t-shirt-back-mockup-plain-cotton-t-shirt-mock-up-template-for-design-branding-print-2535585467.jpg",
  },
  {
    id: 1,
    name: "Jaket Keren",
    price: "Rp250.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1193423704/display_1500/stock-photo-mens-black-leather-jacket-isolated-on-white-background-1193423704.jpg",
  },
  {
    id: 2,
    name: "Sneakers Putih",
    price: "Rp350.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2483704499/display_1500/stock-photo-lviv-ukraine-may-white-sneakers-with-blue-inserts-on-wooden-background-stylish-new-2483704499.jpg",
  },
  {
    id: 3,
    name: "T-Shirt Minimalis",
    price: "Rp120.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2535585467/display_1500/stock-photo-blank-white-t-shirt-back-mockup-plain-cotton-t-shirt-mock-up-template-for-design-branding-print-2535585467.jpg",
  },
  {
    id: 1,
    name: "Jaket Keren",
    price: "Rp250.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1193423704/display_1500/stock-photo-mens-black-leather-jacket-isolated-on-white-background-1193423704.jpg",
  },
  {
    id: 2,
    name: "Sneakers Putih",
    price: "Rp350.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2483704499/display_1500/stock-photo-lviv-ukraine-may-white-sneakers-with-blue-inserts-on-wooden-background-stylish-new-2483704499.jpg",
  },
  {
    id: 3,
    name: "T-Shirt Minimalis",
    price: "Rp120.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2535585467/display_1500/stock-photo-blank-white-t-shirt-back-mockup-plain-cotton-t-shirt-mock-up-template-for-design-branding-print-2535585467.jpg",
  },
  {
    id: 1,
    name: "Jaket Keren",
    price: "Rp250.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1193423704/display_1500/stock-photo-mens-black-leather-jacket-isolated-on-white-background-1193423704.jpg",
  },
  {
    id: 2,
    name: "Sneakers Putih",
    price: "Rp350.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2483704499/display_1500/stock-photo-lviv-ukraine-may-white-sneakers-with-blue-inserts-on-wooden-background-stylish-new-2483704499.jpg",
  },
  {
    id: 3,
    name: "T-Shirt Minimalis",
    price: "Rp120.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2535585467/display_1500/stock-photo-blank-white-t-shirt-back-mockup-plain-cotton-t-shirt-mock-up-template-for-design-branding-print-2535585467.jpg",
  },
  {
    id: 1,
    name: "Jaket Keren",
    price: "Rp250.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1193423704/display_1500/stock-photo-mens-black-leather-jacket-isolated-on-white-background-1193423704.jpg",
  },
  {
    id: 2,
    name: "Sneakers Putih",
    price: "Rp350.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2483704499/display_1500/stock-photo-lviv-ukraine-may-white-sneakers-with-blue-inserts-on-wooden-background-stylish-new-2483704499.jpg",
  },
  {
    id: 3,
    name: "T-Shirt Minimalis",
    price: "Rp120.000",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2535585467/display_1500/stock-photo-blank-white-t-shirt-back-mockup-plain-cotton-t-shirt-mock-up-template-for-design-branding-print-2535585467.jpg",
  },
];

const ProductList = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <div style={{ padding: "2rem" }}>
      <Row gutter={[24, 24]} justify="center">
        {products.map((product, key) => (
          <Col xs={24} sm={12} md={12} lg={4} key={key}>
            <Card
              hoverable
              cover={
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    alt={product.name}
                    src={product.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                    }}
                  />
                </div>
              }
              style={{ borderRadius: borderRadiusLG, overflow: "hidden" }}
            >
              <Card.Meta title={product.name} description={product.price} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
