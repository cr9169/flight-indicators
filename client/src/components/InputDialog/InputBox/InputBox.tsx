import "./InputBox.scss";
import React, { useState } from "react";
import { titles } from "../valuesMapping";

interface InputBoxProps {
  indicator: string;
  handleInputChange: (value: number) => void;
  min: number;
  max: number;
}

const InputBox: React.FC<InputBoxProps> = ({
  indicator,
  handleInputChange,
  min,
  max,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;

    if (newVal === "") {
      setInputValue(newVal);
      return;
    }

    let parsed = Number(newVal);
    if (Number.isNaN(parsed)) {
      return;
    }

    if (parsed < min) parsed = min;
    if (parsed > max) parsed = max;

    setInputValue(String(parsed));
    handleInputChange(parsed);
  };

  return (
    <input
      type="text"
      className="input-box-main"
      value={inputValue}
      onChange={handleChange}
      placeholder={`Enter ${titles[indicator as keyof typeof titles]}`}
    />
  );
};

export default InputBox;
