import {useNavigate} from 'react-router-dom'
import Carousel from "../Carousel/Carousel";
import "./Home.css";


export default function Home({ product }) {

  let navigate = useNavigate()

  return (
    <div className="main">
      <div className="head">
        <h1>Best Sellers</h1>
        <button onClick={() => navigate('/shop')}>
          Shop All Best Sellers
          </button>
      </div>

      <section className="carousel-wrapper">
        {product.map((item) => {
          return (
            <div className="carousel">
              <Carousel item={item} key={item.id} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
