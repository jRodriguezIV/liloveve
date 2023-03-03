import { useState } from "react";
import "./Shop.css";

const Shop = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleViewDetails(products) {
    setSelectedProduct(products);
  }

  return (
    <div>
      <h1> Shop </h1>
      <div className="product-grid">
        {product.map((products) => {
          return (
            <div key={products.id}>
              <span className="relative">
                <img src={products.images[0]} alt={products.brand} />
              </span>
              <button onClick={() => handleViewDetails(products)}>
                {" "}
                View Details{" "}
              </button>
            </div>
          );
        })}
      </div>
      {selectedProduct && (
        <div>
          <button onClick={() => setSelectedProduct(null)}>Close</button>
          <p>Price: {selectedProduct.price}</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
