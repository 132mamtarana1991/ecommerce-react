import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css';
import { TopHeader } from "./components/Header/TopHeader";
import { Home } from './pages/Home/Home';
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Checkout } from './pages/Checkout/Checkout';
import { SingleProduct } from './pages/SingleProduct/SingleProduct';
import NewHeader from './components/Header/new-header';
import SubHeader from './components/Header/sub-header';
import Feature from "./components/feature";
import Footer from "./components/footer";
function App() {

    return (
        <>
          <TopHeader />
          <SubHeader/>
        <NewHeader/>
          
            {/* <Header />  */}
            <Routes>
                <Route path="/single-product/:id" element={<SingleProduct />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Feature/>
      <Footer/>
        </>
    );
}

export default App;