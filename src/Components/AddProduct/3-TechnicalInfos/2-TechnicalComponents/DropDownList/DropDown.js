//---------// Css
import "./dropdownlist.scss";
//---------// React
import { useState, useContext } from "react";
import { UserContext } from "../../../../../Context/UserContext";

const DropDown = ({ data, name }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");

  const { addTechnicalData } = useContext(UserContext);

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
        <label className="titre-dropdwon">{name}</label>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {data.map((data, index) => {
            return (
              <div
                className="dropdown-item"
                key={index}
                onClick={() => {
                  setSelected(data.value);
                  setIsActive(false);
                  addTechnicalData(data.value, data.Theme);
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

export default DropDown;
