import { useState } from "react";

const Shop = ({ product }) => {
  console.log("hellooooo", { product });
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleViewDetails(product) {
    setSelectedProduct(product);
  }

  return (
    <div>
      <h1> Shop </h1>
      {product.map((products) => {return (
        <div key={products.id}>
          <img src={products.images[0]} alt={products.brand} />
          <button onClick={() => handleViewDetails(products)}> View Details</button>
        </div>
      )})}
      {selectedProduct && (
        <div>
          <h2> {selectedProduct.brand}</h2>
          <p> {selectedProduct.category}</p>
          <p>{selectedProduct.description}</p>
          <p>{selectedProduct.price}</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
