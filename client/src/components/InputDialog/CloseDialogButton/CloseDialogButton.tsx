import "./CloseDialogButton.scss";

interface CloseDialogButtonProps {
  handleClose: () => void;
}

const CloseDialogButton: React.FC<CloseDialogButtonProps> = ({
  handleClose,
}) => {
  return (
    <button className="close-dialog-button" onClick={handleClose}></button>
  );
};

export default CloseDialogButton;
