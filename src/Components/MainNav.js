import girl1 from "../images/girl_1.jpeg";
import girl2 from "../images/girl_2.jpeg";
import "./MainNav.css";

export default function mainNav() {
  return (
    <div className="mainNavMenu">
      <div className="mainNavMenu__left">
        <img src={girl1} alt="girl2" />
      </div>
      <nav className="mainNavMenu__center">
        <ul className="mainNavMenu__center__list">
          <li> EARRINGS </li>
          <li> RINGS </li>
          <li> NECKLACES </li>
          <li> BRACELETS </li>
          <li> WEDDING </li>
          <li> MEN'S </li>
          <li> BEST SELLERS </li>
          <li> SHOP ALL </li>
        </ul>
      </nav>
      <div className="mainNavMenu__right">
        <img src={girl2} alt="girl2" />
      </div>
    </div>
  );
}
