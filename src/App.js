import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Intro from "./Pages/Intro/Intro.js";
import Home from "./Pages/Home/Home.js";
import SignIn from "./Pages/SignIn/SignIn.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import Welcome from "./Pages/Welcome/Welcome.js";
import AddProduct from "./Pages/AddProduct/AddProduct";
import ProtectedRoute from "./Pages/Protected/ProtectedRoute";
import Offer from "./Pages/Offer/Offer";
import MyProfile from "./Pages/Profile/MyProfile";

import { UserContextProvider } from "./Context/UserContext";

import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home/offer/:id" element={<Offer />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route
            path="/addProduct"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/myProfil"
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </UserContextProvider>
  );
}

export default App;
