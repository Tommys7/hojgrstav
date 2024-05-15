import Logo from "../images/logo-header-desktop.png";
import Image from "next/image";
import Link from "next/link"

const Footer = () => {
  return (
    <div>
      <div id="Kontakt" className="footer">
        <div className="footer-wrap container">
          <div className="footer-links">
            <Link href="#Realizace">Realizace</Link>
            <Link href="#Recenze">Recenze</Link>
            <Link href="#Kontakt">Kontakt</Link>
            <Link href="#Poptavka">Poptávka</Link>
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
              <Link href="tel:+420773775247">+420 773 775 247</Link>
              <Link href="mailto:tomas.hojgr23@gmail.com">
                tomas.hojgr23@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
