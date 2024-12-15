import "./AltitudeIndicator.scss";
import EastIcon from "@mui/icons-material/East";

interface AltitudeIndicatorProps {
  indicator: number;
}

const AltitudeIndicator: React.FC<AltitudeIndicatorProps> = ({ indicator }) => {
  const fillPercentage = (indicator / 3000) * 100; // Convert indicator to percentage
  const arrowPosition = 300 - (fillPercentage * 300) / 100; // Calculate arrow's top position

  return (
    <div className="altitude-indicator-main">
      <div className="chart-container">
        <svg viewBox="0 0 100 300" width="100" height="300">
          <defs>
            <linearGradient id="blueGradient" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="hsl(209, 56%, 84%)" />{" "}
              {/* Baby Blue */}
              <stop offset="30%" stopColor="hsl(207, 61%, 61%)" />{" "}
              {/* Blue Grotto */}
              <stop offset="60%" stopColor="hsl(202, 100%, 36%)" />{" "}
              {/* Royal Blue */}
              <stop offset="100%" stopColor="hsl(209, 100%, 23%)" />{" "}
              {/* Navy Blue */}
            </linearGradient>
          </defs>
          <rect
            x="1"
            y={300 - fillPercentage * 3}
            width="98"
            height={fillPercentage * 3}
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
        <div className="arrow-container" style={{ top: `${arrowPosition}px` }}>
          <div className="line"></div>
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default AltitudeIndicator;
