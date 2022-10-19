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
        // value={technicalInformations.Marque}
        name={name}
        id={id}
        // onChange={handleChange}
        autoComplete={autoComplete}
      />
      <span className="spanDescriptionInput">{name}</span>
    </div>
  );
};

export default InputField;
