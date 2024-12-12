import "./InputDialog.scss";
import FieldTitle from "./FieldTitle/FieldTitle";
import InputBox from "./InputBox/InputBox";
import SubmitButton from "./SubmitButton/SubmitButton";

interface InputDialogProps {
  closeDialog: () => void;
}

const InputDialog: React.FC<InputDialogProps> = ({ closeDialog }) => {
  return (
    <dialog className="input-dialog-main">
      <div className="inputs-section">
        {["Altitude", "HIS", "ADI"].map((indicator) => {
          return (
            <div className="input-section">
              <FieldTitle />
              <InputBox />
            </div>
          );
        })}
      </div>
      <SubmitButton />
    </dialog>
  );
};

export default InputDialog;
