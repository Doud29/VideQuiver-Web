//Components
import { useContext } from "react";
import { UserContext } from "../../../../Context/UserContext";

const BtnSignIn = () => {
  const { logout } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await logout();
      console.log("your are disconnect");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container-btn user" onClick={handleLogout}>
      <ion-icon name="log-out-outline"></ion-icon>
      <span>Logout</span>
    </div>
  );
};

export default BtnSignIn;
