//CSS
import "./inputFields.scss";

const InputField = ({
  value,
  type,
  name,
  id,
  onChange,
  placeholder,
  autoComplete,
}) => {
  return (
    <div className="inputdiv">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        autoComplete={autoComplete}
      />
      <span className="spanDescriptionInput">{name}</span>
    </div>
  );
};

export default InputField;
