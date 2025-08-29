import { InputNumber } from "antd";

const InputAngka = ({ id, value, onChange }) => {
  const allowedKeys = [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "Tab",
    "Home",
    "End",
    "Enter",
  ];
  const handleKeyDown = (e) => {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key))
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <InputNumber
      id={id}
      name={id}
      min={0}
      changeOnWheel={false}
      controls={false}
      onKeyDown={handleKeyDown}
      style={{ width: "50%" }}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputAngka;
