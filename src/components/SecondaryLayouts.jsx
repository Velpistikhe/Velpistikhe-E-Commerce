import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";

const SecondaryLayouts = ({ children }) => {
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
        {children}
      </Content>
    </Layout>
  );
};

export default SecondaryLayouts;
