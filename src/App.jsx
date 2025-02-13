import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar2 from "./Components/NavBar2"; 
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Women from "./Pages/Women";
import Men from "./Pages/Men";
import Kids from "./Pages/Kids";
import Offers from "./Pages/Offers";
import Vmart from "./Pages/Vmart"; 
import Search from "./Pages/Search";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import Kurta from "./Pages/Kurta"; 
import Tops from "./Pages/Tops"; 
import Dresses from "./Pages/Dresses"; 
import Sarees from "./Pages/Sarees"; 
import Suits from "./Pages/Suits"; 
import EthnicSets from "./Pages/EthnicSets"; 
import Bottoms from "./Pages/Bottoms";
import './App.css'
import Carousel from "./Components/Carousel";
import Banner from "./Components/Banner";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/women/kurta" element={<Kurta />} />
        <Route path="/women/tops" element={<Tops />} />
        <Route path="/women/dresses" element={<Dresses />} />
        <Route path="/women/sarees" element={<Sarees />} />
        <Route path="/women/suits" element={<Suits />} />
        <Route path="/women/ethnic-sets" element={<EthnicSets />} />
        <Route path="/women/bottoms" element={<Bottoms />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/vmart" element={<Vmart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <NavBar2 />
      <Carousel />
      <Banner />
    </Router>
  );
}

export default App;
