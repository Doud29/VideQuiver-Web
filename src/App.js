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

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/addProduct" element={<AddProduct />} />
          {/* <div className="App">
          <header className="App-header">Vide Quiver Let's gooo</header>
        </div> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
