import { useState } from "react";
import logo from "../assets/byte-precision-it-high-resolution-logo-transparent.png";

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    // Redirect to an external website and replace the current page in history
    window.location.replace(
      "https://prettyform.addxt.com/a/form/vf/1FAIpQLSf7JCifnb3lEPE0WLzOMVuXXNfz5gC3faUuymgorNlj4VPC3g"
    ); // Replace with the desired URL
  };

  const handleClickOnMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="Byte Precision IT"></img>
      </a>
      <div className="hamburger-menu" onClick={handleClickOnMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#services-page">Services</a>
        </li>
        <li>
          <a href="#about-page">About</a>
        </li>
        <li>
          <button onClick={handleClick} className="navbar-button">
            Survey!
          </button>
        </li>
      </ul>
    </nav>
  );
}
