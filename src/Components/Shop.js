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
      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        {product.map((products) => {
          return (
            <div key={products.id}>
              <span className="relative">
                <img
                  src={products.images[0]}
                  alt={products.brand}
                  className="cursor-pointer border-solid border-2 rounded border-red-500 w-200 h-200"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {/* <button onClick={() => handleViewDetails(products)} View Details </button> */}
                  <p className="text-black">{products.description}</p>
                </div>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
