import { useState } from "react";

const Shop = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  //   function handleViewDetails(products) {
  //     console.log("hi", products);
  //     setSelectedProduct(products);
  //   }

  return (
    <div className="bg-yellow-100">
      <h1> Shop </h1>
      <div className="grid grid-cols-5 grid-rows-6 gap-4 mb-2 ">
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
              {/* <button onClick={() => handleViewDetails(products)} View Details </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
