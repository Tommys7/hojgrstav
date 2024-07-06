"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperSlideComponent from "./SwiperSlideComponent";


import HybesovaImg from "../images/jobs/Hybesova/hybesova1.jpg";
import HybesovaImg2 from "../images/jobs/Hybesova/hybesova2.jpg";
import HybesovaImg3 from "../images/jobs/Hybesova/hybesova3.jpg";
import HybesovaImg5 from "../images/jobs/Hybesova/hybesova5.jpg";

import Kolsov1 from "../images/jobs/Kolsov/kolsov1.jpg";
import Kolsov2 from "../images/jobs/Kolsov/kolsov2.jpg";
import Kolsov3 from "../images/jobs/Kolsov/kolsov3.jpg";
import Kolsov4 from "../images/jobs/Kolsov/kolsov4.jpg";

import Kolsov5 from "../images/jobs/Kolsov/kolsov5.jpg";
import Kolsov6 from "../images/jobs/Kolsov/kolsov6.jpg";
import Kolsov7 from "../images/jobs/Kolsov/kolsov7.jpg";
import Kolsov8 from "../images/jobs/Kolsov/kolsov8.jpg";

import SudkovByt1 from "../images/jobs/Sudkov-byt/Sudkov-Byt-1.jpg";
import SudkovByt2 from "../images/jobs/Sudkov-byt/Sudkov-Byt-2.jpg";
import SudkovByt3 from "../images/jobs/Sudkov-byt/Sudkov-Byt-3.jpg";
import SudkovByt4 from "../images/jobs/Sudkov-byt/Sudkov-Byt-4.jpg";

import Pospa1 from "../images/jobs/Kolsov-pospisil/pospa1.jpg";
import Pospa2 from "../images/jobs/Kolsov-pospisil/pospa2.jpg";
import Pospa3 from "../images/jobs/Kolsov-pospisil/pospa3.jpg";
import Pospa4 from "../images/jobs/Kolsov-pospisil/pospa4.jpg";

import Dm1 from "../images/jobs/DM-chodnicky/dm1.jpg";
import Dm2 from "../images/jobs/DM-chodnicky/dm2.jpg";
import Dm3 from "../images/jobs/DM-chodnicky/dm3.jpg";
import Dm4 from "../images/jobs/DM-chodnicky/dm4.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Realizations = () => {
  return (
    <div id="Realizace" className="realization-section pt-20 pb-8">
      <div className="realization-container">
        <h2 className="section-title realizations-title">Realizace</h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <SwiperSlideComponent
              images={[HybesovaImg, HybesovaImg2, HybesovaImg3, HybesovaImg5]}
              title="Zámková dlažba 30m2"
              date="29.4.2024 - 3.5.2024"
              description="Kompletní návrh řešení s ohledem na přistavění pergoly včetně zaměření. Klient si vybral přírodní zámkovou dlažbu a zahradní obrubníky."
              client="E. Hovadová"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Pospa2, Pospa1, Pospa3, Pospa4]}
              title="I Přípravné zemní práce kolem RD"
              date="26.6.2024 - 27.6.2024"
              description="Odkop hlíny v prostorech mezi obrubníky a domem, rozvoz štěrků pod dlažbu, příprava prostor pro pergolu, výkop drážky pro štěrk pod gabiony."
              client="P. Pospíšil"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Kolsov1, Kolsov2, Kolsov3, Kolsov4]}
              title="I Zděný plot s hliníkovým polatím"
              date="15.8.2023 - 28.8.2023"
              description="Demolice a následná výstavba nového plotu. Bourání, odvoz suti, zemní práce, odvoz přebytečné zeminy, betonáž, hydroizolace, zdění face-blocků, armování, montáž hliníkového polatí."
              client="M. Krobotová"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Kolsov5, Kolsov6, Kolsov7, Kolsov8]}
              title="II Zděný plot + dlažba"
              date="1.6.2024 - 3.6.2024"
              description="Dostavení zděného plotu o délce 12m, vybourání staré zídky a panelů, příprava pro zámkovou dlažbu vč. usazení obrubníků."
              client="M. Krobotová"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Dm1, Dm2, Dm3, Dm4]}
              title="Okapové chodníčky Dolní Morava"
              date="1.6.2024 - 3.6.2024"
              description="Obkopání apartmánového domu, zřízení drenáže, rozvoz štěrků, hutnění podkladu, usazení obrub do betonu."
              client="Metrostav"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[SudkovByt4, SudkovByt2, SudkovByt3, SudkovByt1]}
              title="Finální práce byt Sudkov"
              date="5.2.2024 - 9.2.2024"
              description="Finální práce na rekonstruovaném bytě v Sudkově. Kompletní pokládka podlah, montáž nábytku, montáž umyvadla do obkladu včetně napojení odpadu."
              client="S. Hájková"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Realizations;
