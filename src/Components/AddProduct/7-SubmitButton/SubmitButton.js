const SubmitButton = ({ errorMessage }) => {
  return (
    <div>
      <p style={{ color: "red" }}>{errorMessage}</p>
      <input type="submit" value="Déposer mon annonce" />
    </div>
  );
};
export default SubmitButton;
