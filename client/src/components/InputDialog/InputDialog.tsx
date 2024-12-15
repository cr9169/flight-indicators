import "./InputDialog.scss";
import FieldTitle from "./FieldTitle/FieldTitle";
import InputBox from "./InputBox/InputBox";
import NegativeInputBox from "./NegativeInputBox/NegativeInputBox";
import SubmitButton from "./SubmitButton/SubmitButton";
import { useState } from "react";
import { Indicators } from "../../interfaces/indicators";
import CloseDialogButton from "./CloseDialogButton/CloseDialogButton";
import * as valuesMapping from "./valuesMapping";

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
            <FieldTitle
              indicator={
                valuesMapping.titles[key as keyof typeof valuesMapping.titles]
              }
            />
            {key === "adi" ? (
              <NegativeInputBox
                indicator={key}
                handleInputChange={(value) =>
                  handleInputChange(key as keyof Indicators, value)
                }
                min={
                  valuesMapping.ranges[key as keyof typeof valuesMapping.ranges]
                    .min
                }
                max={
                  valuesMapping.ranges[key as keyof typeof valuesMapping.ranges]
                    .max
                }
              />
            ) : (
              <InputBox
                indicator={key}
                handleInputChange={(value) =>
                  handleInputChange(key as keyof Indicators, value)
                }
                min={
                  valuesMapping.ranges[key as keyof typeof valuesMapping.ranges]
                    .min
                }
                max={
                  valuesMapping.ranges[key as keyof typeof valuesMapping.ranges]
                    .max
                }
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
