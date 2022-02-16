import React from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <ProductList/> 
    </div>
  );
}

export default App;
