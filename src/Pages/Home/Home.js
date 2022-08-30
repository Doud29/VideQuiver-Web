//--------------// Css
import "./Home.scss";

//--------------// Components
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";

//--------------// packages
// import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [isSearchBarexisting, setIsSearchBarexisting] = useState(false);
  return (
    <div className="container-home">
      <Header setIsSearchBarexisting={setIsSearchBarexisting} />
      {isSearchBarexisting === false ? (
        <></>
      ) : (
        <SearchBar setIsSearchBarexisting={setIsSearchBarexisting} />
      )}
    </div>
  );
};

export default Home;
