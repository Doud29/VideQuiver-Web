const SwitchButton = ({ title, name, onChange, value }) => {
  return (
    <div className="bloc-switch">
      <span>{title}</span>
      <label className="switch">
        <input type="checkbox" onChange={onChange} name={name} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default SwitchButton;
