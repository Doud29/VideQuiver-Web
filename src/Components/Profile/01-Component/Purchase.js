import Btnprofile from "../BtnProfile";
import Title from "../Title";

const Purchase = () => {
  return (
    <div className="container-btn ">
      <Title title="Mes Achats" />
      <Btnprofile title="Mes commandes" />
      <Btnprofile title="Mes Favoris" />
      <Btnprofile title="Mon panier" />
    </div>
  );
};

export default Purchase;
