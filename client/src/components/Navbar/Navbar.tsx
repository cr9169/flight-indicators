import { View } from "../../types";
import "./Navbar.scss";
import NavButton from "./NavButton/NavButton";
import OpenDialogButton from "./OpenDialogButton/OpenDialogButton";

interface NavbarProps {
  isDialogOpen: boolean;
  handleViewChange: (viewType: View) => void;
  openDialog: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isDialogOpen,
  handleViewChange,
  openDialog,
}) => {
  return (
    <div className="navbar-main">
      {["text", "visual"].map((view) => (
        <NavButton
          key={view}
          id={view}
          handleViewChange={() => handleViewChange(view as View)}
        />
      ))}
      <OpenDialogButton isDialogOpen={isDialogOpen} openDialog={openDialog} />
    </div>
  );
};

export default Navbar;
