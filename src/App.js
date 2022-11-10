import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignIn from "./components/authentication/signin";
// import SignUp from "./components/authentication/signup";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "./components/home/Home"
// import Marvelchar from "./components/marvelchar/Marvelchar";
import Movies from "./components/movies/Movies";
// import Marvelseries from "./components/marvelseries/Marvelseries";
// import Marvelstories from "./components/marvelstories/Marvelstories";
// import axios from "axios";
import React from "react";

//967780d831a3680144c23bf9c5fa53af
//const hash = "967780d831a3680144c23bf9c5fa53af";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/"element={<Movies />}  />
          {/* <Route path="/charcters" element={<Marvelchar />} />
          <Route path="/comics" element={<movies />} />
          <Route path="/series" element={<Marvelseries />} />
          <Route path="/stories" element={<Marvelstories />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
