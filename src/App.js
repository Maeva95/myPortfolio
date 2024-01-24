import React from "react";
import "./index.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projet from "./routes/Projet";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projet" element={<Projet />}/>
        </Routes>
    <Footer/>
    </>
  );
}

export default App;
