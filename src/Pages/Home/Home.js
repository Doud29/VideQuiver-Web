//CSS
import "./Home.scss";

//COMPONENTS
import Header from "../../Components/Header/HeaderBottom/Header";
import SearchBar from "../../Components/Header/HeaderTop/SearchBar";

import FetchProductSell from "../../Components/HomeComponent/FetchProductSell";

const Home = () => {
  return (
    <div className="container-home">
      <Header />
      <SearchBar />
      <div className="container-products">
        <h3>Fil d'actualités</h3>
        <FetchProductSell />
      </div>
    </div>
  );
};

export default Home;
