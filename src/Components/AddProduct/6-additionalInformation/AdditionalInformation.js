//CSS

//CONTEXT
import { UserContext } from "../../../Context/UserContext";
import { useContext } from "react";
//COMPONENTS
import TitleAdditionalinformations from "./TitleAdditionalinformations";
import InputAdditionalInformations from "./InputAdditionalinformations";

const AdditionalInformation = () => {
  const { setCreateOffer, createOffer } = useContext(UserContext);

  const handleValue = (e) => {
    const value = e.target.value;
    setCreateOffer({ ...createOffer, Price: value });
  };

  return (
    <div className="container-description">
      <TitleAdditionalinformations title="Prix et Livraison" />
      <InputAdditionalInformations
        onChange={handleValue}
        type="number"
        name="Prix"
        value={createOffer.Price}
      />
    </div>
  );
};

export default AdditionalInformation;
