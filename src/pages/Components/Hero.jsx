import Background from "../images/excav-22.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="Uvod">
      <div className="hero-container container mx-auto">
        <div className="hero-content">
          <div className="hero-box">
            <h1>
              Vaše vize, naše stavba, jedno úsměvem spojené!
            </h1>
            <a href="#Seznam-praci">
              <button className="hero-btn">Čím se zabýváme?</button>
            </a>
          </div>
        </div>
      </div>
      <Image src={Background} layout="fill" alt="Bagr" className="hero-bg" />
    </div>
  );
};

export default Hero;
