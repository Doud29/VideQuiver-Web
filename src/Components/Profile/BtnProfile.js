const Btnprofile = ({ title }) => {
  const handleIcon = (title) => {
    if (title === "Mes informations Personnelles") {
      return <ion-icon name="person-outline"></ion-icon>;
    }
    if (title === "Mes annonces") {
      return <ion-icon name="pricetag-outline"></ion-icon>;
    }
    if (title === "Mes ventes") {
      return <ion-icon name="paper-plane-outline"></ion-icon>;
    }
    if (title === "Recevoir mes paiments") {
      return <ion-icon name="card-outline"></ion-icon>;
    }
    if (title === "Mes commandes") {
      return <ion-icon name="cube-outline"></ion-icon>;
    }
    if (title === "Mes Favoris") {
      return <ion-icon name="star-outline"></ion-icon>;
    }
    if (title === "Mon Panier") {
      return <ion-icon name="bag-outline"></ion-icon>;
    }
    if (title === "Service client") {
      return <ion-icon name="chatbubbles-outline"></ion-icon>;
    }
    if (title === "FAQ") {
      return <ion-icon name="help-outline"></ion-icon>;
    }
    if (title === "VideQuiver c'est quoi?") {
      return <ion-icon name="flame-outline"></ion-icon>;
    }
  };

  return (
    <div className="container-infos">
      <div className="bloc-left">
        {handleIcon(title)}
        <span>{title}</span>
      </div>
      <ion-icon
        style={{ color: "#508ae2" }}
        name="chevron-forward-outline"
      ></ion-icon>{" "}
    </div>
  );
};

export default Btnprofile;
