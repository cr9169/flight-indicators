import "./NegativeInputBox.scss";
import React, { useState } from "react";

interface NegativeInputBoxProps {
  indicator: string;
  handleInputChange: (value: number) => void;
  min: number;
  max: number;
}

const NegativeInputBox: React.FC<NegativeInputBoxProps> = ({
  indicator,
  handleInputChange,
  min,
  max,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;

    if (newVal === "" || newVal === "-") {
      setInputValue(newVal);
      return;
    }

    const parsed = Number(newVal);
    if (!Number.isNaN(parsed)) {
      let adjustedValue = parsed;

      if (parsed < min) {
        adjustedValue = min;
      } else if (parsed > max) {
        adjustedValue = max;
      }

      setInputValue(String(adjustedValue));
      handleInputChange(adjustedValue);
    }
  };

  return (
    <input
      type="text"
      className="negative-input-box-main"
      value={inputValue}
      onChange={handleChange}
      placeholder={`Enter ${indicator}`}
    />
  );
};

export default NegativeInputBox;
