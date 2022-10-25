const InputRadio = ({ type, onChange, id, name, value }) => {
  return (
    <div>
      <label htmlFor={id}>{id}</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        id={id}
        name={name}
      />
    </div>
  );
};

export default InputRadio;
