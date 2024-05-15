import Logo from "../images/logo-header-desktop.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div id="Kontakt" className="footer">
        <div className="footer-wrap container">
          <div className="footer-links">
            <a href="#Realizace">Realizace</a>
            <a href="#Recenze">Recenze</a>
            <a href="#Kontakt">Kontakt</a>
            <a href="#Poptavka">Poptávka</a>
          </div>
          <a className="mx-auto" href="#Uvod">
            <Image
              className="footer-logo-img"
              src={Logo}
              width="129"
              height="60"

              alt="Logo"
            />
          </a>
          <div className="footer-info-wrap">
            <div className="footer-info ">
              <a href="tel:+420773775247">+420 773 775 247</a>
              <a href="mailto:tomas.hojgr23@gmail.com">
                tomas.hojgr23@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
