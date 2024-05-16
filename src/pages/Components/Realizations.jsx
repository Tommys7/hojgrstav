"use client"

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";


import CalendarImg from "../images/calendar.png";
import ContractImg from "../images/contract.png";


import HybesovaImg from "../images/jobs/Hybesova/hybesova1.jpg";
import HybesovaImg2 from "../images/jobs/Hybesova/hybesova2.jpg";
import HybesovaImg3 from "../images/jobs/Hybesova/hybesova3.jpg";
import HybesovaImg4 from "../images/jobs/Hybesova/hybesova4.jpg";
import HybesovaImg5 from "../images/jobs/Hybesova/hybesova5.jpg";


import Kolsov1 from "../images/jobs/Kolsov/kolsov1.jpg";
import Kolsov2 from "../images/jobs/Kolsov/kolsov2.jpg";
import Kolsov3 from "../images/jobs/Kolsov/kolsov3.jpg";
import Kolsov4 from "../images/jobs/Kolsov/kolsov4.jpg";




// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Realizations = () => {
  return (
    <div id="Realizace" className="realization-section pt-20 pb-8">
      <div className="realization-container">
        <h2 className="section-title !mb-4">Realizace</h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation

        >
          <SwiperSlide>
            <div>
              <div className="swiper-slide-custom">
                <div className="swiper-slide-imgs">
                  <div className="swiper-slide-item swiper-slide-item-mobile">
                    <Image src={HybesovaImg} fill={true} placeholder="blur" alt="Zakázka" className="!static"/>
                  </div>
                  <div className="swiper-slide-item swiper-slide-item-mobile">
                    <Image src={HybesovaImg2} fill={true} placeholder="blur" alt="Zakázka" className="!static"/>

                  </div>
                  <div className="swiper-slide-item swiper-slide-item-mobile">
                    <Image src={HybesovaImg3} fill={true} placeholder="blur" alt="Zakázka" className="!static"/>

                  </div>
                  <div className="swiper-slide-item">
                    <Image src={HybesovaImg5} fill={true} placeholder="blur" alt="Zakázka" className="!static"/>

                  </div>
                </div>
                <div className="swiper-slide-content">
                  <h3 className="swiper-slide-title">Zámková dlažba 30m2</h3>
                  <div className="swiper-slide-text">
                    <div>
                 
                      <Image src={CalendarImg} fill={true} placeholder="blur" className="swiper-slide-icon !static" alt="Ikona"/>

                    </div>
                    <div>
                      <span>Termín</span>
                      <p className="swiper-slide-date">29.4.2024 - 3.5.2024</p>
                    </div>
                  </div>
                  <div className="swiper-slide-text">
                    <div>
                     <Image src={ContractImg} fill={true} placeholder="blur" className="swiper-slide-icon !static" alt="Ikona"/>
                    </div>
                    <div>
                      <span>Popis</span>
                      <p className="swiper-slide-date">
                        Kompletní vymyšlení řešení s ohledem na přistavění pergoly včetně zaměření. Podloží pod
                        pochozí dlažbou zvoleno 300mm štěrk 16-32, 50mm štěrk
                        4-8. Zvolena přírodní zámková dlažba a zahradní
                        obrubníky.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="swiper-slide-custom">
                <div className="swiper-slide-imgs">
                  <div className="swiper-slide-item swiper-slide-item-mobile">
                    <Image src={Kolsov1} fill={true} placeholder="blur" alt="Zakázka" className="!static"/>
                  </div>
                  <div className="swiper-slide-item swiper-slide-item-mobile">
                    <Image src={Kolsov2} fill={true} placeholder="blur" alt="Zakázka" className="!static"/>

                  </div>
                  <div className="swiper-slide-item swiper-slide-item-mobile">
                    <Image src={Kolsov3} fill={true} placeholder="blur" alt="Zakázka" className="!static"/>

                  </div>
                  <div className="swiper-slide-item">
                    <Image src={Kolsov4} fill={true} placeholder="blur" alt="Zakázka" className="!static"/>

                  </div>
                </div>
                <div className="swiper-slide-content">
                  <h3 className="swiper-slide-title">Zděný plot s hliníkovým polatím</h3>
                  <div className="swiper-slide-text">
                    <div>
                 
                      <Image src={CalendarImg} fill={true} placeholder="blur" className="swiper-slide-icon !static" alt="Ikona"/>

                    </div>
                    <div>
                      <span>Termín</span>
                      <p className="swiper-slide-date">15.8.2023 - 28.8.2023</p>
                    </div>
                  </div>
                  <div className="swiper-slide-text">
                    <div>
                     <Image src={ContractImg} fill={true} placeholder="blur" className="swiper-slide-icon !static" alt="Ikona"/>
                    </div>
                    <div>
                      <span>Popis</span>
                      <p className="swiper-slide-date">
                        Demolice a následná výstavba nového plotu. Bourání, odvoz suti, zemní práce, odvoz přebytečné horniny, betonáž, hydroizolace, zdění face-blocků, armování, montáž hliníkového polatí.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Realizations;
