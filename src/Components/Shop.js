import { useState } from "react";

const Shop = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleViewDetails(products) {
    setSelectedProduct(products);
  }
  
  return (
    <div className="bg-yellow-100">
      <h1> Shop </h1>
      <div className="grid grid-cols-5 grid-rows-6 gap-2 mb-2 ">
        {product.map((products) => {
          return (
            <div key={products.id}>
              <span className="relative">
                <img
                  src={products.images[0]}
                  alt={products.brand}
                  className="cursor-pointer border-solid border-2 rounded border-red-100 max-h-40 max-w-xs m-auto p-auto"
                />

                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-black">{products.description}</p>
                </div>
              </span>
              <button className="bg-black text-white px-4 py-2 m-8 rounded-lg" onClick={() => handleViewDetails(products)}> {" "} View Details{" "} </button>
            </div>
          );
        })}
      </div>
      {selectedProduct && (
        <div className="flex flex-col items-center mt-2 h-16">
        <button className="bg-black text-white px-4 py-2 rounded-lg" onClick={() => setSelectedProduct(null)}>Close</button>
        <p className="text-red-600">Price: {selectedProduct.price}</p>
      </div>
      
      )}
      
    </div>
  );
};

export default Shop;
