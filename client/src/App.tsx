import "./App.css";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { View } from "./types";
import VisualViewSection from "./components/VisualViewSection/VisualViewSection";
import TextViewSection from "./components/TextViewSection/TextViewSection";
import InputDialog from "./components/InputDialog/InputDialog";
import { Indicators } from "./interfaces/indicators";
import IndicatorsService from "./indicators.service";

function App() {
  const [indicators, setIndicators] = useState<Indicators | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preferedView, setPreferedView] = useState<View>("text");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = () => {
      IndicatorsService.getIndicators()
        .then((data) => setIndicators(data))
        .catch((err) => setError(err));
    };

    fetchData();
  }, []);

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

  return error ? (
    <p>Error: {error}</p>
  ) : indicators ? (
    <div>
      {isDialogOpen ? <InputDialog closeDialog={closeDialog} /> : null}
      <Navbar handleViewChange={handleViewChange} openDialog={openDialog} />
      <main>
        {preferedView === "text" ? (
          <VisualViewSection indicators={indicators} />
        ) : (
          <TextViewSection indicators={indicators} />
        )}
      </main>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default App;
