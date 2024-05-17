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

import SudkovByt1 from "../images/jobs/Sudkov-byt/Sudkov-Byt-1.jpg";
import SudkovByt2 from "../images/jobs/Sudkov-byt/Sudkov-Byt-2.jpg";
import SudkovByt3 from "../images/jobs/Sudkov-byt/Sudkov-Byt-3.jpg";
import SudkovByt4 from "../images/jobs/Sudkov-byt/Sudkov-Byt-4.jpg";

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
              description="Kompletní vymyšlení řešení s ohledem na přistavění pergoly včetně zaměření. Podloží pod pochozí dlažbou zvoleno 300mm štěrk 16-32, 50mm štěrk 4-8. Klient si vybral přírodní zámkovou dlažbu a zahradní obrubníky."
              client="E. Hovadová"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Kolsov1, Kolsov2, Kolsov3, Kolsov4]}
              title="Zděný plot s hliníkovým polatím"
              date="15.8.2023 - 28.8.2023"
              description="Demolice a následná výstavba nového plotu. Bourání, odvoz suti, zemní práce, odvoz přebytečné horniny, betonáž, hydroizolace, zdění face-blocků, armování, montáž hliníkového polatí."
              client="M. Krobotová"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[SudkovByt4, SudkovByt2, SudkovByt3, SudkovByt1]}
              title="Finální práce na bytu"
              date="5.2.2024 - 9.2.2024"
              description="Finální práce na rekonstruovaném bytě v Sudkově. Kompletní pokládka podlah, montáž nábytku, montáž umyvadla do obkladu včetne napojení odpadu."
              client="S. Hájková"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Realizations;
