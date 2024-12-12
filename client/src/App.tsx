import "./App.css";
import { useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { View } from "./types";
import VisualViewSection from "./components/VisualViewSection/VisualViewSection";
import TextViewSection from "./components/TextViewSection/TextViewSection";
import InputDialog from "./components/InputDialog/InputDialog";

function App() {
  const [preferedView, setPreferedView] = useState<View>("text");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleViewChange = (viewType: View) => {
    setPreferedView(viewType === "text" ? "text" : "visual");
  };

  const openDialog = () => {
    setIsDialogOpen(true);
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    dialogRef.current?.close();
  };

  return (
    <div>
      {isDialogOpen ? <InputDialog closeDialog={closeDialog} /> : null}
      <Navbar handleViewChange={handleViewChange} openDialog={openDialog} />
      <main>
        {preferedView === "text" ? <VisualViewSection /> : <TextViewSection />}
      </main>
    </div>
  );
}

export default App;
