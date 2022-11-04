import "./profile.scss";

import CountParameter from "../../Components/Profile/01-Component/CountParamater";
import Sells from "../../Components/Profile/01-Component/Sells";
import Purchase from "../../Components/Profile/01-Component/Purchase";
import Assistance from "../../Components/Profile/01-Component/Assistance";
import Headerprofile from "../../Components/Profile/HeaderProfile";
import Header from "../../Components/SearchBar/Header/Header";

const MyProfile = () => {
  return (
    <div className="container-buttons-profile">
      <Headerprofile />
      <CountParameter />
      <Sells />
      <Purchase />
      <Assistance />
      <Header />
    </div>
  );
};

export default MyProfile;
