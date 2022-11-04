//------------// Css
import "../Categories/categorie.scss";

//---------------// Composent
// import ImgCategorie from "../Categories/ImgCategori";

const Disciplines = ({
  montagneState,
  setMontagneState,
  merState,
  setMerState,
}) => {
  return (
    <div className="container-categorie">
      {/* <ImgCategorie
        source=""
        name="Mer"
        alt=""
        // onClick={() => {
        //   setMerState(!merState);
        //   setMontagneState(false);
        // }}
      />
      <ImgCategorie
        source=""
        name="Montagne"
        alt=""
        // onClick={() => {
        //   setMontagneState(!montagneState);
        //   setMerState(false);
        // }}
      />
      <ImgCategorie source="" name="Air" alt="" /> */}

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
