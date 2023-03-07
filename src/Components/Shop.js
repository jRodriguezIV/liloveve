import "./Shop.css";

const Shop = ({ product }) => {
  return (
    <div class="liloveveJewellery">
      <div className="grid-container">
        {product.map((items) => {
          return (
            <div className="liloveveJewellery__product" key={items.id}>
              <div class="liloveveJewellery__image">
                <a href="#">
                  <img src={items.images[0]} alt={items.title} />
                </a>
              </div>

              <div class="liloveveJewellery__styleDetails">
                <div class="liloveveJewellery__infoContainer">
                  <a href="#" class="liloveveJewellery__title">
                    {" "}
                    {items.title}{" "}
                  </a>
                  <p class="liloveveJewellery__price"> ${items.price} </p>
                  <p class="liloveveJewellery__description">
                    {" "}
                    {items.description}{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
