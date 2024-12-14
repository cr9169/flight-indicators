import "./InputDialog.scss";
import FieldTitle from "./FieldTitle/FieldTitle";
import InputBox from "./InputBox/InputBox";
import NegativeInputBox from "./NegativeInputBox/NegativeInputBox";
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
  const ranges = {
    altitude: { min: 0, max: 3000 },
    his: { min: -100, max: 100 },
    adi: { min: 0, max: 100 },
  };

  const titles = {
    altitude: "Altitude",
    his: "HIS",
    adi: "ADI",
  };

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
            <FieldTitle indicator={titles[key as keyof typeof titles]} />
            {key === "his" ? (
              <NegativeInputBox
                indicator={key}
                handleInputChange={(value) =>
                  handleInputChange(key as keyof Indicators, value)
                }
                min={ranges[key as keyof typeof ranges].min}
                max={ranges[key as keyof typeof ranges].max}
              />
            ) : (
              <InputBox
                indicator={key}
                handleInputChange={(value) =>
                  handleInputChange(key as keyof Indicators, value)
                }
                min={ranges[key as keyof typeof ranges].min}
                max={ranges[key as keyof typeof ranges].max}
              />
            )}
          </div>
        ))}
      </div>
      <SubmitButton handleSubmit={handleSubmit} />
    </dialog>
  );
};

export default InputDialog;
