import BPIButton from "./BPIButton";
import homeImg from "../assets/home_page.jpg";

export default function BPIHome() {
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
          "Your productivity matters—let us handle the tech, so you can focus on
          what you do best."
        </p>
        <BPIButton text={"Learn more!"} />
      </div>
      <img src={homeImg} alt="Technical Support" className="home-page-img" />
    </div>
  );
}
