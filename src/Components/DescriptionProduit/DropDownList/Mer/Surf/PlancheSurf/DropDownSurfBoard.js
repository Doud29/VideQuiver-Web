//---------// Css
import "../../../dropdownlist.scss";
//---------// React
import { useState } from "react";

//---------//JSON
import dropDownValue from "../../../../../../JSON/MER/SurfDescription/surfDescription.json";

const DropDownSurfBoard = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={() => {
          setIsActive(!isActive);
        }}
        id="dropdown"
      >
        <span>{selected}</span>
        <label className="titre-dropdwon">Type de planche</label>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {dropDownValue.MER.Surf["Planche de surf"].Type.map((data) => {
            return (
              <div
                className="dropdown-item"
                key={data.id}
                onClick={() => {
                  setSelected(data.value);
                  setIsActive(false);
                }}
              >
                {data.content}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDownSurfBoard;
