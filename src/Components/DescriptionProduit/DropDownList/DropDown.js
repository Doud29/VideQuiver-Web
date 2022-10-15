//---------// Css
import "./dropdownlist.scss";
//---------// React
import { useState, useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import { useEffect } from "react";

const DropDown = ({ data, name }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");

  const { addTechnicalData } = useContext(UserContext);

  // useEffect(() => {
  //   let value = createOffer["Technical informations"];
  //   setCreateOffer({ ...{ value }, ...{ [name]: selected } });
  // }, [selected]);

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
          {data.map((data) => {
            return (
              <div
                className="dropdown-item"
                key={data.id}
                onClick={() => {
                  setSelected(data.value);
                  setIsActive(false);
                  addTechnicalData(name, data.value);
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
