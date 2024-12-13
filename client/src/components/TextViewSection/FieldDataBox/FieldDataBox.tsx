import "./FieldDataBox.scss";

interface FieldDataBoxProps {
  id: string;
  indicatorValue: number;
}

const FieldDataBox: React.FC<FieldDataBoxProps> = ({ id, indicatorValue }) => {
  return (
    <div className="field-data-box-main">
      <h2>{id}</h2>
      <p>{indicatorValue}</p>
    </div>
  );
};

export default FieldDataBox;
