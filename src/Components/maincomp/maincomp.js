import "./Banner.css";
import girl1 from "../images/girl_1.jpeg"
import girl2 from "../images/girl_2.jpeg"

export default function Banner() {
  return (
    <div className="banner">
      <div>
        <button>Shop Now</button>
      </div>

      <div className="mainNavMenu">
        <div className="mainNavMenu__left">
          <img src={girl1} alt= "girl2" />
        </div>
        <nav className="mainNavMenu__center">
          <ul className="mainNavMenu__center__list">
            <h1> <li> EARRINGS </li> </h1>
            <h1> <li> RINGS </li> </h1>
            <h1> <li> NECKLACES </li> </h1>
            <h1> <li> BRACELETS </li> </h1>
            <h1> <li> WEDDING </li> </h1>
            <h1> <li> MEN'S </li> </h1>
            <h1> <li> BEST SELLERS </li> </h1>
            <h1> <li> SHOP ALL </li> </h1>
          </ul>
        </nav>
        <div className="mainNavMenu__right">
        <img src={girl2} alt= "girl2" />
        </div>
      </div>
    </div>
  );
}
