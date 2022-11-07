import TitleAdditionalinformations from "./TitleAdditionalinformations";
import InputAdditionalInformations from "./InputAdditionalinformations";
import { UserContext } from "../../../Context/UserContext";
import { useContext } from "react";

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
        name="Prix"
        value={createOffer.Price}
      />
    </div>
  );
};

export default AdditionalInformation;
