const InputAdditionalInformations = ({ onChange, value, name }) => {
  return (
    <div className="inputdiv">
      <input
        type="text"
        placeholder=" "
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        autoComplete="off"
      />
      <span className="spanDescriptionInput">Prix</span>
    </div>
  );
};

export default InputAdditionalInformations;
