import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import "./styles/App.css";
import "./styles/Header.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App(){
  return(
    <Router>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<div>Page not found 404</div>}/>
      </Routes>
    </Router>
  )
}
export default App;