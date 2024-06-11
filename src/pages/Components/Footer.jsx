import Logo from "../images/logo-header-desktop.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div id="Kontakt" className="footer">
        <div className="footer-wrap container">
          <div className="footer-box">
            <div className="footer-links">
              <div>
                <Link className="footer-link" href="#Realizace">
                  Realizace
                </Link>
              </div>
              <div>
                <Link className="footer-link" href="#Recenze">
                  Recenze
                </Link>
              </div>
              <div>
                <Link className="footer-link" href="#Poptavka">
                  Poptávka
                </Link>
              </div>
              <div>
                <Link className="footer-link" href="#Kontakt">
                  Kontakt
                </Link>
              </div>
            </div>
            <Link className="mx-auto" href="#Uvod">
              <Image
                className="footer-logo-img"
                src={Logo}
                width="129"
                height="60"
                alt="Logo"
              />
            </Link>
            <div className="footer-info-wrap">
              <div className="footer-info ">
                <span className="text-xl footer-special-text">
                  Kontaktní osoba
                </span>
                <span>Tomáš Hojgr</span>
                <div>
                  <Link className="footer-link" href="tel:+420773775247">+420 773 775 247</Link>
                </div>
                <div>
                  <Link className="footer-link" href="mailto:tomas.hojgr23@gmail.com">
                    hojgr.tomas@email.cz
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
