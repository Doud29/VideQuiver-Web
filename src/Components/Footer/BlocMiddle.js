const BlocMiddle = () => {
  return (
    <div className="container-bloc middle">
      <div className="container-precision">
        {" "}
        <h4>A propos</h4>
        <div className="liste">
          <ul>
            <li>CGV/CGU</li>
            <li>Politique de confidentialité</li>
            <li>Règles de publication</li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="container-contact">
        {" "}
        <h4>Aide</h4>
        <div className="liste">
          {" "}
          <ul>
            <li>Comment ça marche?</li>
            <li>FAQ</li>
            <li>Nous contacter</li>
          </ul>
          {/* <p>Comment ça marche?</p>
          <p>FAQ</p>
          <p>Nous contacter</p> */}
        </div>
      </div>
      <div className="container-follow">
        <h4>Nous suivre</h4>{" "}
        <div className="logo">
          <ion-icon
            style={{ color: "white", fontSize: "25px" }}
            name="logo-instagram"
          ></ion-icon>{" "}
          <ion-icon
            style={{ color: "white", fontSize: "25px", marginLeft: "15px" }}
            name="logo-facebook"
          ></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default BlocMiddle;
