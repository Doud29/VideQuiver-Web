//--------------// Css
import "./Home.scss";

//--------------// Components
import Header from "../../Components/Header/HeaderBottom/Header";
import SearchBar from "../../Components/Header/HeaderTop/SearchBar";
// import CategorieGlisse from "../../Components/Categories/CategorieGlisse/CategorieGlisse";
// import CategorieMontagne from "../../Components/Categories/CategorieMontagne/CategorieMontagne";
import FetchProductSell from "../../Components/HomeComponent/FetchProductSell";

//--------------// packages
// import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  //--------------// states
  //--------------// pour l'affichage de la bar de recherche
  const [isSearchBarexisting, setIsSearchBarexisting] = useState(false);
  //--------------// pour l'affichage de la bar de recherche
  // const [montagneState, setMontagneState] = useState(false);
  // const [merState, setMerState] = useState(false);
  // console.log(montagneState, "montagne");
  // console.log(merState, "mer");

  //--------------// Fonction permettant d'afficher les composants de chaque discipline
  // const wichCategorie = (montagneState, merState) => {
  //   if (montagneState === false && merState === true) {
  //     return <CategorieGlisse />;
  //   } else if (montagneState === true && merState === false) {
  //     return <CategorieMontagne />;
  //   }
  // };

  return (
    <div className="container-home">
      <Header
        setIsSearchBarexisting={setIsSearchBarexisting}
        isSearchBarexisting={isSearchBarexisting}
      />{" "}
      <SearchBar />
      <div className="container-products">
        {/* <Disciplines
          montagneState={montagneState}
          setMontagneState={setMontagneState}
          merState={merState}
          setMerState={setMerState}
        /> */}
        {/* {wichCategorie(montagneState, merState)} */}
        {/* <Infos /> */}
        <h3>Fil d'actualités</h3>
        <FetchProductSell />
      </div>
    </div>
  );
};

export default Home;
