"use client";
import { useState, useEffect } from "react";
import Logo from "../images/logo-header-desktop.png";
import MobileLogo from "../images/logo-header-mobile.png";
import PhoneImg from "../images/phone-call.png";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false); // Set isMobileMenuOpen to false when clicked
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden-custom");
    } else {
      document.body.classList.remove("overflow-hidden-custom");
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="header">
        <div className="header-img">
          <a className="header-img__desktop" href="#Uvod">
            <Image
              className="rounded-md-custom"
              src={Logo}
              width="129"
              height="60"
              alt="Logo"
            />
          </a>
          <a className="header-img__mobile" href="#Uvod">
            <Image
              className="rounded-md-custom"
              src={MobileLogo}
              width="129"
              height="60"
              alt="Logo"
            />
          </a>
        </div>
        <div className="text-xl-custom flex-custom gap-4-custom font-bold-custom text-yellow-400-custom header-links">
          <a className="header-link" href="#Realizace">
            Realizace
          </a>
          <a className="header-link" href="#Recenze">
            Recenze
          </a>
          <a className="header-link" href="#Kontakt">
            Kontakt
          </a>
          <a className="header-link" href="#Poptavka">
            Poptávka
          </a>
          <a href="tel:+420773775247">
            <Image
              className="header-phone-img"
              src={PhoneImg}
              width="30"
              height="30"
              alt="Logo"
            />
          </a>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
          className="header-btn"
        >
          <div
            className={
              "header-btn__line-small" + (isMobileMenuOpen ? " hidden" : "")
            }
          ></div>
          <div
            className={
              "header-btn__line" +
              (isMobileMenuOpen ? " header-btn__rotate" : "")
            }
          ></div>
          <div
            className={
              "header-btn__line" +
              (isMobileMenuOpen ? " header-btn__rotate-opposite" : "")
            }
          ></div>
        </button>
      </div>
      <div>
        <div
          className={
            "mobile-menu mobile-menu-wrap" +
            (isMobileMenuOpen ? " mobile-menu__open" : "")
          }
        >
          <div className="mobile-menu-links">
            <a onClick={closeMobileMenu} href="#Realizace">
              Realizace
            </a>
            <a onClick={closeMobileMenu} href="#Recenze">
              Recenze
            </a>
            <a onClick={closeMobileMenu} href="#Kontakt">
              Kontakt
            </a>
            <a onClick={closeMobileMenu} href="#Poptavka">
              Poptávka
            </a>
          </div>
          <div className="mobile-menu-socials">
            <a onClick={closeMobileMenu} href="tel:+420773775247">
              <Image
                className="mobile-menu-icon"
                src={PhoneImg}
                alt="Telefon"
              />
            </a>
            <a href="#Uvod">
              <Image
                onClick={closeMobileMenu}
                className="header-open-logo-img"
                src={MobileLogo}
                alt="Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
