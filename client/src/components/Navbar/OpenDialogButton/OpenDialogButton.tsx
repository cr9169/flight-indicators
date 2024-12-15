import "./OpenDialogButton.scss";
import AddIcon from "@mui/icons-material/Add";

interface OpenDialogButtonProps {
  openDialog: () => void;
}

const OpenDialogButton: React.FC<OpenDialogButtonProps> = ({
  openDialog,
}) => {
  return (
    <button className="open-dialog-button-main" onClick={openDialog}>
      <AddIcon className={"plus-icon"} />
    </button>
  );
};

export default OpenDialogButton;
