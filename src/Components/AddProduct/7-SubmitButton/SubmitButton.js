import "./submitbutton.scss";

const SubmitButton = ({ errorMessage, SubmitOffer }) => {
  return (
    <div className="container-input-submit">
      <span style={{ color: "red" }}>{errorMessage}</span>
      {/* <input type="submit" value="Valider mon annonce" /> */}
      <button onClick={SubmitOffer}>Enregistrer annonce</button>
    </div>
  );
};
export default SubmitButton;
