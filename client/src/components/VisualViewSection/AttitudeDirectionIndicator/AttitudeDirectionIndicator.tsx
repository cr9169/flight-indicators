import "./AttitudeDirectionIndicator.scss";

interface AttitudeDirectionIndicatorProps {
  indicator: number;
}

const AttitudeDirectionIndicator: React.FC<AttitudeDirectionIndicatorProps> = ({
  indicator,
}) => {
  return (
    <div
      className={`altitude-direction-indicator-main ${
        indicator === 0 ? "zero" : indicator === 100 ? "hundred" : ""
      }`}
    ></div>
  );
};

export default AttitudeDirectionIndicator;
