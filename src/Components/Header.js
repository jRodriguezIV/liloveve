import "./Header.css"
import { slide as Menu } from 'react-burger-menu'

function showSettings(event) {
    event.preventDefault();
  }

export default function Header(){
    return (
        <div className="header">
          <h2>LILOVEVE</h2>
          <Menu>
        <a id="home" className="menu-item" href="/">About</a>
        <a id="about" className="menu-item" href="/about">Engagement rings</a>
        <a id="contact" className="menu-item" href="/contact">Classes</a>
        <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
      </Menu>
        </div>
    )
}


