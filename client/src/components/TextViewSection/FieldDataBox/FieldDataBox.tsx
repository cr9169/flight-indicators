import "./FieldDataBox.scss";

interface FieldDataBoxProps {
  id: string;
  indicatorValue: number;
  isDialogOpen: boolean;
}

const FieldDataBox: React.FC<FieldDataBoxProps> = ({
  id,
  indicatorValue,
  isDialogOpen,
}) => {
  return (
    <div
      className={`field-data-box-main ${!isDialogOpen ? "hover-enabled" : ""}`}
    >
      <h2>{id}</h2>
      <p>{indicatorValue}</p>
    </div>
  );
};

export default FieldDataBox;
