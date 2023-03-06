import { useState } from "react";
import "./Shop.css";

const Shop = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <h1> Shop </h1>
      <div className="product-grid">
        {product.map((products, index) => {
          return (
            <div className={index} key={products.id}>
              <span className="relative">
                <img src={products.images[0]} alt={products.brand} />
              </span>
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
