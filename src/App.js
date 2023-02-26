import { useState, useEffect } from "react";
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
          console.log(data);
          setProduct(data);
        });
    }
    getProductInfo();
  }, []);

  return (
    <div>
      <h1> hello </h1>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
