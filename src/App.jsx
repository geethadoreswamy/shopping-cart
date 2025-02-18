import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

import Men from "./Pages/Men";
import Kids from "./Pages/Kids";
import Offers from "./Pages/Offers";
import Vmart from "./Pages/Vmart";
import CartPage from "./Components/cart";
import Profile from "./Pages/Profile";
import './App.css';
import Carousel from "./Components/Carousel";
import Banner from "./Components/Banner";
import NavBar2 from "./Components/NavBar2";
import LoginPage from "./Components/Login";
import CardList from "./Components/CardList";
import ProductPage from "./Components/ProductPage";
import WomenCategory from "./Components/WomenCategory";

function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <NavBar2 />
      <Carousel />
      <Banner />
      <CardList/>
     
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          
         
          <Route path="/women/:categoryName" element={<WomenCategory />} /> 
          <Route path="/men" element={<Men />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/vmart" element={<Vmart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:title" element={<ProductPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
