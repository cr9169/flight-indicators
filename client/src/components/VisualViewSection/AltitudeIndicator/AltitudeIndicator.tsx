import "./AltitudeIndicator.scss";

interface AltitudeIndicatorProps {
  indicator: number;
}

const AltitudeIndicator: React.FC<AltitudeIndicatorProps> = (indicator) => {
  return <div className="altitude-indicator-main"></div>;
};

export default AltitudeIndicator;
