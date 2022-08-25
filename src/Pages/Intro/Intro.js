//--------------// Css
import "./Intro.scss";

//--------------// packages
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="container-intro">
      <Link
        to="/home"
        style={{
          textDecoration: "none",
          color: "beige",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Vide Quiver</h1>
        <p>Let's in, rider !</p>
      </Link>
    </div>
  );
};

export default Intro;
