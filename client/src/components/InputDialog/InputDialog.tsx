import "./InputDialog.scss";
import FieldTitle from "./FieldTitle/FieldTitle";
import InputBox from "./InputBox/InputBox";
import SubmitButton from "./SubmitButton/SubmitButton";
import { useState } from "react";
import { Indicators } from "../../interfaces/indicators";

interface InputDialogProps {
  closeDialog: () => void;
}

const InputDialog: React.FC<InputDialogProps> = ({ closeDialog }) => {
  const [input, setInput] = useState<Indicators>({
    altitude: 0,
    his: 0,
    adi: 0,
  });

  const handleInputChange = (key: keyof Indicators, value: number) => {
    setInput((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <dialog className="input-dialog-main">
      <div className="inputs-section">
        {Object.keys(input).map((key) => (
          <div className="input-section" key={key}>
            <FieldTitle indicator={key} />
            <InputBox
              indicator={key}
              value={(input[key as keyof Indicators] as number) || 0}
              handleInputChange={(value) =>
                handleInputChange(key as keyof Indicators, value)
              }
            />
          </div>
        ))}
      </div>
      <SubmitButton />
    </dialog>
  );
};

export default InputDialog;
