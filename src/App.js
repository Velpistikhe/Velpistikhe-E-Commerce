import "./App.css";
import { BrowserRouter as Router } from "react-router";
import { ConfigProvider, theme } from "antd";
import Items from "./modules/item/pages/Items";
import Layouts from "./components/Layouts";

function App() {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Router>
        <Layouts>
          <Items />
        </Layouts>
      </Router>
    </ConfigProvider>
  );
}

export default App;
