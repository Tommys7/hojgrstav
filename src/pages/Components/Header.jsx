"use client";
import { useState, useEffect } from "react";
import Logo from "../images/logo-header-desktop.png";
import Logo2 from "../images/hojgrstav-yellow.png"
import MobileLogo from "../images/logo-header-mobile.png";
import PhoneImg from "../images/phone-call.png";
import InstagramImg from "../images/instalogo.png";
import Image from "next/image";
import Link from "next/link";

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
          <Link className="header-img__desktop" href="#Uvod">
            <Image
              className="rounded-md-custom header-logo"
              src={Logo2}
              sizes="256px"
              width="129"
              height="60"
              alt="Logo"
            />
          </Link>
          <Link className="header-img__mobile" href="#Uvod">
            <Image
              className="rounded-md-custom"
              src={Logo2}
              sizes="256px"
              width="129"
              height="60"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="text-xl-custom flex-custom gap-4-custom font-bold-custom text-yellow-400-custom header-links">
          <Link className="header-link" href="#Realizace">
            Realizace
          </Link>
          <Link className="header-link" href="#Poptavka">
            Poptávka
          </Link>
          <Link className="header-link" href="#Kontakt">
            Kontakt
          </Link>
          <Link href="tel:+420773775247">
            <Image
              className="header-phone-img"
              src={PhoneImg}
              sizes="64px"
              width="30"
              height="30"
              alt="Logo"
            />
          </Link>
          <Link target="blank" href="https://www.instagram.com/tomas.hojgr/">
            <Image
              className="header-instagram-img"
              src={InstagramImg}
              width="30"
              height="30"
              alt="Logo"
            />
          </Link>
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
            <Link onClick={closeMobileMenu} href="#Realizace">
              Realizace
            </Link>
            <Link onClick={closeMobileMenu} href="#Kontakt">
              Kontakt
            </Link>
            <Link onClick={closeMobileMenu} href="#Poptavka">
              Poptávka
            </Link>
          </div>
          <div className="mobile-menu-socials">
            <Link onClick={closeMobileMenu} href="tel:+420773775247">
              <Image
                className="mobile-menu-icon"
                src={PhoneImg}
                alt="Telefon"
              />
            </Link>
            <Link target="blank" onClick={closeMobileMenu} href="https://www.instagram.com/tomas.hojgr/">
              <Image
                className="mobile-menu-icon"
                src={InstagramImg}
                alt="Instagram"
              />
            </Link>
            <Link href="#Uvod">
              <Image
                onClick={closeMobileMenu}
                className="header-open-logo-img"
                src={Logo2}
                alt="Logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
