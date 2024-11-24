import logo from "../assets/byte-precision-it-high-resolution-logo-transparent.png";

export default function NavigationBar() {
  const handleClick = () => {
    // Redirect to an external website and replace the current page in history
    window.location.replace(
      "https://prettyform.addxt.com/a/form/vf/1FAIpQLSf7JCifnb3lEPE0WLzOMVuXXNfz5gC3faUuymgorNlj4VPC3g"
    ); // Replace with the desired URL
  };

  return (
    <nav className="navbar">
      <a href="/" className="archivo-black-logo">
        <img className="logo" src={logo} alt="Byte Precision IT"></img>
      </a>
      <ul>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/about">About</a>
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
