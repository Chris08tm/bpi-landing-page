import aboutImg from "../assets/about_page.jpg";

export default function BPIAbout({ language }) {
  return (
    <div className="about-page" id="about-page">
      <div className="about-text">
        <div className="phrase">
          <span class="light">
            About <br />
          </span>
          <span class="bold-highlight">
            BYTE PRECISION <br />
          </span>
          <span class="archivo-black-logo">IT </span>
        </div>
        <p className="about-extract">
          At Byte Precision IT, we know how frustrating technology issues can
          be. Our journey began at Best Buy Geek Squad, where we gained hands-on
          experience solving a variety of tech challenges for the public. Driven
          to do more, we expanded our expertise through advanced studies in
          software engineering, cybersecurity, and IT. Now, we're focused on
          providing exceptional IT support to professionals who rely on their
          hardware to excel. Whether it's troubleshooting, optimization, or
          advice, we're here to ensure your technology empowers you to do your
          best work. With Byte Precision IT, you can count on expert solutions
          and a partner who understands your needs.
        </p>
      </div>
      <img className="home-page-img" src={aboutImg} alt="BYTE PRECISION IT" />
    </div>
  );
}
