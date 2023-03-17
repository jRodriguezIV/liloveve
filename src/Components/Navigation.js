import "./Navigation.css";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <ul className="navigation">
      <li>WEDDING & ENGAGEMENT</li>
      <li>CLASSES</li>
      <li>GALLERY EVENTS</li>
      <li>BLOG</li>
      <li>CONTACT</li>
      <Link to="/about"><li>About Us</li></Link>
    </ul>
  );
}
