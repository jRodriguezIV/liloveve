import "./Banner.css";
import MainNav from "./MainNav";

export default function Banner() {
  return (
    <div className="header-container">
      <div className="banner">
        <button>Shop Now</button>
      </div>
      <MainNav />
    </div>
  );
}
