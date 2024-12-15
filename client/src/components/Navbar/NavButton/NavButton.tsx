import "./NavButton.scss";

interface NavButtonProps {
  id: string;
  handleViewChange: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ id, handleViewChange }) => {
  return (
    <button className="nav-button-main" onClick={handleViewChange}>
      {id.toUpperCase()}
    </button>
  );
};

export default NavButton;
