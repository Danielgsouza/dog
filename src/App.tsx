// import React from 'react';
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header  from "./components/Header";
import  Footer  from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import LoginCreate from "./components/Login/LoginCreate";

const App = () => {
  return( 
  <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login/*" element={<Login />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  </div>
  )
};

export default App;
