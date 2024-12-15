import "./AltitudeIndicator.scss";
import EastIcon from "@mui/icons-material/East";
import { useState, useEffect } from "react";

interface AltitudeIndicatorProps {
  indicator: number;
}

const AltitudeIndicator: React.FC<AltitudeIndicatorProps> = ({ indicator }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const fillPercentage = (indicator / 3000) * 100; // Convert indicator to percentage
  const arrowPosition = 300 - (fillPercentage * 300) / 100; // Calculate arrow's top position

  useEffect(() => {
    setIsAnimating(false);
    setIsAnimating(true);
  }, [indicator]);

  return (
    <div className="altitude-indicator-main">
      <div className="chart-container">
        <svg viewBox="0 0 100 300" width="100" height="300">
          <defs>
            <linearGradient id="blueGradient" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="hsl(209, 56%, 84%)" />
              <stop offset="30%" stopColor="hsl(207, 61%, 61%)" />
              <stop offset="60%" stopColor="hsl(202, 100%, 36%)" />
              <stop offset="100%" stopColor="hsl(209, 100%, 23%)" />
            </linearGradient>
          </defs>
          <rect
            x="1"
            y={isAnimating ? 300 - fillPercentage * 3 : 300}
            width="98"
            height={isAnimating ? fillPercentage * 3 : 0}
            fill="url(#blueGradient)"
            className="animated-fill"
          />
          <rect
            x="0"
            y="0"
            width="100"
            height="300"
            fill="none"
            stroke="black"
            strokeWidth="6"
            shapeRendering="crispEdges"
          />
        </svg>
        <div
          className="arrow-container"
          style={{
            top: isAnimating ? `${arrowPosition}px` : `300px`,
          }}
        >
          <div className="line"></div>
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default AltitudeIndicator;
