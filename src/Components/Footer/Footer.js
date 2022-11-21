//CSS
import "./footer.scss";
//COMPONENTS
import BlocTop from "./BlocTop";
import BlocMiddle from "./BlocMiddle";
import BlocBottom from "./BlocBottom";

const Footer = () => {
  return (
    <div className="container-footer">
      <BlocTop />
      <BlocMiddle />
      <BlocBottom />
    </div>
  );
};

export default Footer;
