import { useState } from "react";

const Shop = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  //   function handleViewDetails(products) {
  //     console.log("hi", products);
  //     setSelectedProduct(products);
  //   }

  return (
    <div>
      <h1> Shop </h1>
      {product.map((products) => {
        return (
          <div key={products.id} className ="grid-cols-4">
            <span>
            <img src={products.images[0]} alt={products.brand} />
            </span>
            {/* <button onClick={() => handleViewDetails(products)} View Details </button> */}
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
