import "./OpenDialogButton.scss";
import AddIcon from "@mui/icons-material/Add";

interface OpenDialogButtonProps {
  isDialogOpen: boolean;
  openDialog: () => void;
}

const OpenDialogButton: React.FC<OpenDialogButtonProps> = ({
  isDialogOpen,
  openDialog,
}) => {
  return (
    <button className="open-dialog-button-main" onClick={openDialog}>
      <AddIcon className={`plus-icon ${isDialogOpen ? "open" : ""}`} />
    </button>
  );
};

export default OpenDialogButton;
