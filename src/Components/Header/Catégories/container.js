//CSS
import "./container.scss";
//COMPONENT
import BtnContainer from "./Btn-Container/BtnContainer";
const Container = () => {
  return (
    <div className="container">
      <BtnContainer title="Mer" />
      <BtnContainer title="Montagne" />
      <BtnContainer title="Air" />
    </div>
  );
};

export default Container;
