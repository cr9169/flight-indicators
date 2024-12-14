import "./InputDialog.scss";
import FieldTitle from "./FieldTitle/FieldTitle";
import InputBox from "./InputBox/InputBox";
import SubmitButton from "./SubmitButton/SubmitButton";
import { useState } from "react";
import { Indicators } from "../../interfaces/indicators";
import CloseDialogButton from "./CloseDialogButton/CloseDialogButton";

interface InputDialogProps {
  closeDialog: () => void;
  handleDataSubmition: (input: Indicators) => void;
}

const InputDialog: React.FC<InputDialogProps> = ({
  closeDialog,
  handleDataSubmition,
}) => {
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

  const handleSubmit = () => {
    handleDataSubmition(input);
    closeDialog();
  };

  return (
    <dialog className="input-dialog-main">
      <CloseDialogButton handleClose={closeDialog} />
      <div className="inputs-section">
        {Object.keys(input).map((key) => (
          <div className="input-section" key={key}>
            <FieldTitle indicator={key} />
            <InputBox
              indicator={key}
              value={(input[key as keyof Indicators] as number) ?? 0}
              handleInputChange={(value) =>
                handleInputChange(key as keyof Indicators, value)
              }
            />
          </div>
        ))}
      </div>
      <SubmitButton handleSubmit={handleSubmit} />
    </dialog>
  );
};

export default InputDialog;
