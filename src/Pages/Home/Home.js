//--------------// Css
import "./Home.scss";

//--------------// Components
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CategorieGlisse from "../../Components/CategorieGlisse/CategorieGlisse";
import CategorieMontagne from "../../Components/CategorieMontagne/CategorieMontagne";
import Disciplines from "../../Components/Disciplines/Disciplines";
import Infos from "../../Components/Infos/Infos";
import Produit from "../../Components/Fiche-Produit/Produit";

//--------------// packages
// import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  //--------------// states
  //--------------// pour l'affichage de la bar de recherche
  const [isSearchBarexisting, setIsSearchBarexisting] = useState(false);
  //--------------// pour l'affichage de la bar de recherche
  const [montagneState, setMontagneState] = useState(false);
  const [merState, setMerState] = useState(false);
  // console.log(montagneState, "montagne");
  // console.log(merState, "mer");

  //--------------// Fonction permettant d'afficher les composants de chaque discipline
  const wichCategorie = (montagneState, merState) => {
    if (montagneState === false && merState === true) {
      return <CategorieGlisse />;
    } else if (montagneState === true && merState === false) {
      return <CategorieMontagne />;
    }
  };

  return (
    <div className="container-home">
      <Header
        setIsSearchBarexisting={setIsSearchBarexisting}
        isSearchBarexisting={isSearchBarexisting}
      />
      <SearchBar />
      <Disciplines
        montagneState={montagneState}
        setMontagneState={setMontagneState}
        merState={merState}
        setMerState={setMerState}
      />
      {wichCategorie(montagneState, merState)}
      <Infos />
      <h3>Nouveautés</h3>
      <Produit />
    </div>
  );
};

export default Home;
