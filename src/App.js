import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { TopHeader } from "./components/Header/TopHeader";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Checkout } from "./pages/Checkout/Checkout";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import NewHeader from "./components/Header/new-header";
import SubHeader from "./components/Header/sub-header";
import Feature from "./components/feature";
import Footer from "./components/footer";
import CategoriesProduct from "./pages/categories-product";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import EditUser from "./pages/Admin/EditUser";
import AddUser from "./pages/Admin/AddUser";
function App() {
  const { registerUser } = useSelector((state) => ({
    registerUser: state.data.registerUser,
  }));
  useEffect(() => {
    if (registerUser?.email) {
      localStorage.setItem("user", JSON.stringify(registerUser));
    }
  }, [registerUser]);

  return (
    <>
      <TopHeader />
      <SubHeader />
      <NewHeader />

      {/* <Header />  */}
      <Routes>
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/categories-product/:id" element={<CategoriesProduct />} />
        <Route exact path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/editUser/:id" element={<EditUser />} />
        <Route exact path="/admin" element={<HomeAdmin />} />
      </Routes>
      <Feature />
      <Footer />
    </>
  );
}

export default App;
