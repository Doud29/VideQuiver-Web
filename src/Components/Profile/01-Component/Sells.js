import Btnprofile from "../BtnProfile";
import Title from "../Title";

const Sells = () => {
  return (
    <div className="container-btn ">
      <Title title="Mes ventes" />
      <Btnprofile title="Mes annonces" />
      <Btnprofile title="Mes ventes" />
      <Btnprofile title="Recevoir mes paiments" />
    </div>
  );
};

export default Sells;
