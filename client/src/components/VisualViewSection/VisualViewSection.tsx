import "./VisualViewSection.scss";
import { Indicators } from "../../interfaces/indicators";
import AltitudeIndicator from "./AltitudeIndicator/AltitudeIndicator";
import HorizontalSituationIndicator from "./HorizontalSituationIndicator/HorizontalSituationIndicator";
import AttitudeDirectionIndicator from "./AttitudeDirectionIndicator/AttitudeDirectionIndicator";

interface VisualViewSectionProps {
  indicators: Indicators;
}

const VisualViewSection: React.FC<VisualViewSectionProps> = ({
  indicators,
}) => {
  return (
    <div className="visual-view-section-main">
      <AltitudeIndicator indicator={indicators.altitude} />
      <HorizontalSituationIndicator indicator={indicators.his} />
      <AttitudeDirectionIndicator indicator={indicators.adi} />
    </div>
  );
};

export default VisualViewSection;
