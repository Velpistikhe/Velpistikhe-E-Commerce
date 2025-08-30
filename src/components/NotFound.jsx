import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";

const NotFound = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: colorBgContainer }}>
      <Content
        style={{
          margin: "auto",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        <h1>404 - Not Found</h1>
        <p>Maaf, halaman yang anda cari tidak ada.</p>
      </Content>
    </Layout>
  );
};

export default NotFound;
