const InputAdditionalInformations = ({ onChange, value, name, type }) => {
  return (
    <div className="inputdiv">
      <input
        type={type}
        placeholder=" "
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        autoComplete="off"
      />
      <span className="spanDescriptionInput">Prix [€]</span>
    </div>
  );
};

export default InputAdditionalInformations;
