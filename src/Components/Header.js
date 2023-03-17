import "./Header.css";
import Navigation from "./Navigation";
import Banner from "./Banner";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>LILOVEVE</h1>
      </Link>
      <Navigation />
      <Banner />
    </div>
  );
}
