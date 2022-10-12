//------------// CSS
import "./App.scss";

//------------// Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//------------// Components and Pages
import Intro from "./Pages/Intro/Intro.js";
import Home from "./Pages/Home/Home.js";
import SignIn from "./Pages/SignIn/SignIn.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import Welcome from "./Pages/Welcome/Welcome.js";
import AddProduct from "./Pages/AddProduct/AddProduct";
import Product from "./Pages/Product/Product";
import { UserContextProvider } from "./Context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
