//--------------// Css
import "./Home.scss";

//--------------// Components
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Categorie from "../../Components/Categories/Catégories";
import Infos from "../../Components/Infos/Infos";
//--------------// packages
// import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [isSearchBarexisting, setIsSearchBarexisting] = useState(false);
  return (
    <div className="container-home">
      <Header
        setIsSearchBarexisting={setIsSearchBarexisting}
        isSearchBarexisting={isSearchBarexisting}
      />
      {isSearchBarexisting === false ? <></> : <SearchBar />}
      <Categorie />
      <Infos />
    </div>
  );
};

export default Home;
