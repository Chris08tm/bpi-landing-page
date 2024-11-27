import { useState } from "react";
import logo from "../assets/byte-precision-it-high-resolution-logo-transparent.png";

export default function NavigationBar({ language, toggleLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    window.open(
      "https://prettyform.addxt.com/a/form/vf/1FAIpQLSf7JCifnb3lEPE0WLzOMVuXXNfz5gC3faUuymgorNlj4VPC3g"
    );
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
          <div className="toggle-div">
            <p>Español?</p>
            <label class="switch">
              <input type="checkbox" onChange={toggleLanguage} />
              <span class="slider round"></span>
            </label>
          </div>
        </li>
        <li>
          <a href="#services-page">
            {language === "es" ? "Servicios" : "Services"}
          </a>
        </li>
        <li>
          <a href="#about-page">
            {language === "es" ? "Sobre Nosotros" : "About"}
          </a>
        </li>
        <li>
          <button onClick={handleClick} className="navbar-button">
            {language === "es" ? "Encuesta!" : "Survey!"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
