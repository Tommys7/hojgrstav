import Background from "../images/excav-22.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container container mx-auto">
      <Image
        src={Background}
        layout="fill"
        alt="Bagr"
        className="hero-bg"
      />

      <div className="hero-content">
        <div className="hero-box">
          <h1>
            Venkovní dlažby, zděné a pletivové ploty, ztracené bednění, pergoly,
            zemní a výkopové práce, podlahy, terénní úpravy a další na klíč!
          </h1>
          <a href="/">
            <button className="hero-btn">Více info</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
