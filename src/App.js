//------------// CSS
import "./App.scss";

//------------// Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//------------// Components and Pages
import Intro from "./Pages/Intro/Intro.js";
import Home from "./Pages/Home/Home.js";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          {/* <div className="App">
          <header className="App-header">Vide Quiver Let's gooo</header>
        </div> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
