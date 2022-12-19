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
        <button className="link">
          {icon}
          <span style={{ color: "black" }}>{item}</span>
        </button>
      </Link>
    </>
  );
};

export default BtnHeader;
