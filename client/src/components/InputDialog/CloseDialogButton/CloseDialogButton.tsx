import "./CloseDialogButton.scss";
import CloseIcon from "@mui/icons-material/Close";

interface CloseDialogButtonProps {
  handleClose: () => void;
}

const CloseDialogButton: React.FC<CloseDialogButtonProps> = ({
  handleClose,
}) => {
  return (
    <button className="close-dialog-button" onClick={handleClose}>
      <CloseIcon className="close-dialog-button-icon" />
    </button>
  );
};

export default CloseDialogButton;
