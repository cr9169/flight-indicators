import "./SubmitButton.scss";

interface SubmitButtonProps {
  handleSubmit: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ handleSubmit }) => {
  return (
    <button className="submit-button" onClick={handleSubmit}>
      Send
    </button>
  );
};

export default SubmitButton;
