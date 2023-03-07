import React, { useState, useEffect } from "react";
import Shop from "./Components/Shop";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

const API_BASE = "https://dummyjson.com/";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    function getProductInfo() {
      const url = `${API_BASE}/products/`;
      fetch(url)
        .then((result) => result.json())
        .then((data) => {
          setProduct(data.products);
          console.log(data.products)
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
    getProductInfo();
  }, []);

  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home product={product} />} />
          <Route path="/shop" element={<Shop product={product} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
