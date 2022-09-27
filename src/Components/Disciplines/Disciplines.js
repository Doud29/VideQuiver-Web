//------------// Css
import "../Categories/categorie.scss";

const Disciplines = ({
  montagneState,
  setMontagneState,
  merState,
  setMerState,
}) => {
  return (
    <div className="container-categorie">
      <div
        className="categorie"
        onClick={() => {
          setMerState(!merState);
          setMontagneState(false);
        }}
      >
        <img src="" alt="" />
        <p>Mer</p>
      </div>
      <div
        className="categorie"
        onClick={() => {
          setMontagneState(!montagneState);
          setMerState(false);
        }}
      >
        <img src="" alt="" />
        <p>Montagne</p>
      </div>
      <div className="categorie">
        <img src="" alt="" />
        <p>Vol</p>
      </div>
    </div>
  );
};

export default Disciplines;
