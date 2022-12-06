//--------------// Css
import "./Home.scss";

//--------------// Components
import Header from "../../Components/SearchBar/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CategorieGlisse from "../../Components/Categories/CategorieGlisse/CategorieGlisse";
import CategorieMontagne from "../../Components/Categories/CategorieMontagne/CategorieMontagne";
import Disciplines from "../../Components/Disciplines/Disciplines";
// import Infos from "../../Components/Infos/Infos";
import FetchProductSell from "../../Components/HomeComponent/FetchProductSell";
import Footer from "../../Components/Footer/Footer";
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
      />{" "}
      <SearchBar />
      <div className="container-products">
        <Disciplines
          montagneState={montagneState}
          setMontagneState={setMontagneState}
          merState={merState}
          setMerState={setMerState}
        />
        {wichCategorie(montagneState, merState)}
        {/* <Infos /> */}
        <h3>Nouveautés vente</h3>
        <FetchProductSell />
        <h3>Nouveautés location</h3>
      </div>
    </div>
  );
};

export default Home;
