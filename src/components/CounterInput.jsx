import { useState } from "react";
import { Button, theme, Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Text } = Typography;

const CounterInput = ({ min = 1, max = 99, defaultValue = 1, onChange }) => {
  const [value, setValue] = useState(defaultValue);
  const {
    token: { colorBorder, borderRadiusLG },
  } = theme.useToken();

  const handleDecrease = () => {
    if (value > min) {
      const newValue = value - 1;
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      const newValue = value + 1;
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        border: `1px solid ${colorBorder}`,
        borderRadius: borderRadiusLG,
      }}
    >
      <Button
        type="text"
        icon={<MinusOutlined />}
        onClick={handleDecrease}
        disabled={value <= min}
      />
      <Text style={{ margin: "0 12px", minWidth: "20px", textAlign: "center" }}>
        {value}
      </Text>
      <Button
        type="text"
        icon={<PlusOutlined />}
        onClick={handleIncrease}
        disabled={value >= max}
      />
    </div>
  );
};

export default CounterInput;
