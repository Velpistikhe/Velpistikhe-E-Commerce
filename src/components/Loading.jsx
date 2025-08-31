import { Spin } from "antd";

const Loading = () => {
  return (
    <>
      <Spin fullscreen tip="Loading..." size="large">
        <div></div>
      </Spin>
    </>
  );
};

export default Loading;
