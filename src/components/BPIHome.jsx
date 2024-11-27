import BPIButton from "./BPIButton";
import homeImg from "../assets/home_page.jpg";

export default function BPIHome({ language }) {
  return (
    <div className="home-page">
      <div className="home-page-msg">
        <div class="phrase">
          <span class="light">Because </span>
          <span class="highlight">Your Work </span>
          <span class="light">deserves </span>
          <span class="archivo-black-logo">IT that </span>
          <span class="bold-highlight">Works.</span>
        </div>
        <p>
          {language === "en"
            ? "Your productivity matters—let us handle the tech, so you can focus on what you do best."
            : "Tu productividad importa—dejanos la technologia, para que tu te puedas enfocar en lo que mejor haces."}
        </p>
        <BPIButton text={language === "en" ? "Learn more!" : "Aprende mas!"}/>
      </div>
      <img src={homeImg} alt="Technical Support" className="home-page-img" />
    </div>
  );
}
