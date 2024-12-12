import { View } from "../../types";
import "./Navbar.scss";

interface NavbarProps {
  handleViewChange: (viewType: View) => void;
  openDialog: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleViewChange, openDialog }) => {
  return <div></div>;
};

export default Navbar;
