import Background from "../images/excav-22.jpg";
// import Background from "../images/hoj-main-2.png"
import Image from "next/image";
import Link from "next/link"


const Hero = () => {
  return (
    <div id="Uvod">
      <div className="hero-container container mx-auto">
        <div className="hero-content">
          <div className="hero-box">
            <h1>
              Vaše vize, naše stavba, jedno úsměvem spojené!
            </h1>
            <Link href="#Seznam-praci">
              <button className="hero-btn">Čím se zabýváme?</button>
            </Link>
          </div>
        </div>
      </div>
      <Image src={Background} priority fill={true} sizes="100vw" alt="Bagr" className="hero-bg" />
    </div>
  );
};

export default Hero;
