import "./App.css";
import { BrowserRouter as Router } from "react-router";
import { App as AntdApp, ConfigProvider, theme } from "antd";
import Items from "./modules/item/pages/Items";
import Layouts from "./components/Layouts";

function App() {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <AntdApp>
        <Router>
          <Layouts>
            <Items />
          </Layouts>
        </Router>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
