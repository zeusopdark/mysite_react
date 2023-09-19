import React from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Register from "./Register.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./App.css"

import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
