//CSS
import "./offerDescription.scss";

//-----// Components
import TexteAeraField from "./2-TechnicalComponents/TextAeraField";
import TitleOfferDescription from "./1-Title/TitleOfferDescription";
import ButtonDiscipline from "./2-TechnicalComponents/ButtonDiscipline";
import InputFieldSpan from "./2-TechnicalComponents/InputFieldSpan";

const OfferDescription = () => {
  return (
    <div className="container-input-button">
      <TitleOfferDescription />
      <ButtonDiscipline />
      <InputFieldSpan />
      <TexteAeraField />
    </div>
  );
};

export default OfferDescription;
