import "./AttitudeDirectionIndicator.scss";

interface AttitudeDirectionIndicatorProps {
  indicator: number;
}

const AttitudeDirectionIndicator: React.FC<AttitudeDirectionIndicatorProps> = (
  indicator
) => {
  return <div className="altitude-direction-indicator-main"></div>;
};

export default AttitudeDirectionIndicator;
