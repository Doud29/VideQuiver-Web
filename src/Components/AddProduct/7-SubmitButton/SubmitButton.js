import "./submitbutton.scss";

const SubmitButton = ({ errorMessage }) => {
  return (
    <div className="container-input-submit">
      <span style={{ color: "red" }}>{errorMessage}</span>
      <input type="submit" value="Valider mon annonce" />
    </div>
  );
};
export default SubmitButton;
