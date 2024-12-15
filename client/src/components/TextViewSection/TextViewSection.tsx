import "./TextViewSection.scss";
import { Indicators } from "../../interfaces/indicators";
import FieldDataBox from "./FieldDataBox/FieldDataBox";

interface TextViewSectionProps {
  isDialogOpen: boolean;
  indicators: Indicators;
}

const TextViewSection: React.FC<TextViewSectionProps> = ({
  isDialogOpen,
  indicators,
}) => {
  return (
    <div className="text-view-section-main">
      {["Altitude", "HIS", "ADI"].map((indicator) => (
        <FieldDataBox
          id={indicator}
          key={indicator}
          indicatorValue={
            indicators[indicator.toLowerCase() as keyof Omit<Indicators, "_id">]
          }
          isDialogOpen={isDialogOpen}
        />
      ))}
    </div>
  );
};

export default TextViewSection;
