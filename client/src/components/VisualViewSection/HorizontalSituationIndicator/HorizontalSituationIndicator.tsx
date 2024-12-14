import "./HorizontalSituationIndicator.scss";

interface HorizontalSituationIndicatorProps {
  indicator: number;
}

const HorizontalSituationIndicator: React.FC<
  HorizontalSituationIndicatorProps
> = (indicator) => {
  return <div className="horizontal-situation-indicator-main"></div>;
};

export default HorizontalSituationIndicator;
