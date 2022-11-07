//----------// Css
import "./switchSelection.scss";

//----------// Packages
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
//------// Components
import SwitchButton from "./RadioButton";
import TitleSwitchSelection from "./TitleSwitchSelection";
const SwitchSelection = () => {
  const { createOffer, setCreateOffer } = useContext(UserContext);
  const handleToggle = (e) => {
    let value = e.target.checked;
    const newObj = { ...createOffer };
    setCreateOffer({ ...newObj, [e.target.name]: value });
  };

  return (
    <div className="container-switch">
      <TitleSwitchSelection title="Annonce" />
      <SwitchButton title="Vente " name="sell" onChange={handleToggle} />
      <SwitchButton title="Location " name="rent" onChange={handleToggle} />
    </div>
  );
};

export default SwitchSelection;
