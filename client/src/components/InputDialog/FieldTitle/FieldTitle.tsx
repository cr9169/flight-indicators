import "./FieldTitle.scss";

interface FieldTitleProps {
  indicator: string;
}

const FieldTitle: React.FC<FieldTitleProps> = ({ indicator }) => {
  return <h2 className="field-title-main">{indicator}</h2>;
};

export default FieldTitle;
