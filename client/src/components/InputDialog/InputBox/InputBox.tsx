import "./InputBox.scss";

interface InputBoxProps {
  indicator: string;
  value: number;
  handleInputChange: (value: number) => void;
}

const InputBox: React.FC<InputBoxProps> = ({
  indicator,
  value,
  handleInputChange,
}) => {
  return (
    <input
      type="number"
      className="input-box"
      value={value}
      onChange={(e) => handleInputChange(parseFloat(e.target.value))}
      placeholder={`Enter ${indicator}`}
    />
  );
};

export default InputBox;
