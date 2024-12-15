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

  /**
   * Updates the rotation state to smoothly point the arrow to the target indicator value.
   * Calculates the shortest rotation path (clockwise or counterclockwise) to minimize rotation distance.
   *
   * @param {number} indicator - The target rotation angle (in degrees) the arrow should point to.
   * @param {function} setRotation - A state setter function to update the current rotation value.
   * @returns {void}
   */
  useEffect(() => {
    setRotation((prev) => {
      /**
       * The difference between the target indicator and the current rotation.
       * @type {number}
       */
      const difference = indicator - prev;

      /**
       * The shortest rotation path to the target angle.
       * If the difference exceeds 180 degrees, adjust for the shortest path.
       * @type {number}
       */
      const shortestRotation =
        Math.abs(difference) > 180
          ? difference > 0
            ? difference - 360
            : difference + 360
          : difference;

      return prev + shortestRotation;
    });
  }, [indicator]);

  return (
    <div className="horizontal-situation-indicator-main">
      <p>0</p>
      <p>90</p>
      <p>180</p>
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
