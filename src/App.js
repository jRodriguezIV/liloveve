import React, { useState, useEffect } from "react";
import Shop from "./Components/Shop";
import Header from "./Components/Header";

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
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
    getProductInfo();
  }, []);

  return (
    <div>
      <Header/>
      <main>
        <Shop product={product} />
      </main>
    </div>
  );
}

export default App;
