import "./HorizontalSituationIndicator.scss";
import NorthIcon from "@mui/icons-material/North";
import { useEffect, useState } from "react";

interface HorizontalSituationIndicatorProps {
  indicator: number;
}

const HorizontalSituationIndicator: React.FC<
  HorizontalSituationIndicatorProps
> = ({ indicator }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const difference = indicator - rotation;
    const shortestRotation =
      Math.abs(difference) > 180
        ? difference > 0
          ? difference - 360
          : difference + 360
        : difference;

    setRotation((prev) => prev + shortestRotation);
  }, [indicator]);

  return (
    <div className="horizontal-situation-indicator-main">
      <p>0</p>
      <p>180</p>
      <p>90</p>
      <p>270</p>
      <NorthIcon
        className="arrow"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      />
    </div>
  );
};

export default HorizontalSituationIndicator;
