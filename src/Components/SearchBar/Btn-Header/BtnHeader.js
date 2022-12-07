import "./BtnHeader.scss";
import { Link } from "react-router-dom";

const BtnHeader = ({ item, url, icon }) => {
  const styleBloc = {
    height: "100%",
    width: "80px",
    textDecoration: "none",
  };
  return (
    <>
      <Link to={url} style={styleBloc}>
        <div className="bloc-logo-par">
          {icon}
          <span style={{ color: "black" }}>{item}</span>
        </div>
      </Link>
    </>
  );
};

export default BtnHeader;
