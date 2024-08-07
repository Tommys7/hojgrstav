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

import Poulik361 from "../images/jobs/poulik-36/poulik-36-1.jpg";
import Poulik362 from "../images/jobs/poulik-36/poulik-36-2.jpg";
import Poulik363 from "../images/jobs/poulik-36/poulik-36-3.jpg";
import Poulik364 from "../images/jobs/poulik-36/poulik-36-4.jpg";

import PoulikModel1 from "../images/jobs/Kolsov-poulik-teren/poulik-teren-1.jpg"
import PoulikModel2 from "../images/jobs/Kolsov-poulik-teren/poulik-teren-2.jpg"
import PoulikModel3 from "../images/jobs/Kolsov-poulik-teren/poulik-teren-3.jpg"
import PoulikModel4 from "../images/jobs/Kolsov-poulik-teren/poulik-teren-4.jpg"

import Sumperk151 from "../images/jobs/Sumperk-15/sumperk-15-1.jpg"
import Sumperk152 from "../images/jobs/Sumperk-15/sumperk-15-2.jpg"
import Sumperk153 from "../images/jobs/Sumperk-15/sumperk-15-3.jpg"
import Sumperk154 from "../images/jobs/Sumperk-15/sumperk-15-4.jpg"

import PospaModel1 from "../images/jobs/Kolsov-pospisil-model/pospa-model-1.jpg"
import PospaModel2 from "../images/jobs/Kolsov-pospisil-model/pospa-model-2.jpg"
import PospaModel3 from "../images/jobs/Kolsov-pospisil-model/pospa-model-3.jpg"
import PospaModel4 from "../images/jobs/Kolsov-pospisil-model/pospa-model-4.jpg"

import KanalOprava1 from "../images/jobs/Kanal-oprava/kanal-oprava-1.jpg"
import KanalOprava2 from "../images/jobs/Kanal-oprava/kanal-oprava-2.jpg"
import KanalOprava3 from "../images/jobs/Kanal-oprava/kanal-oprava-3.jpg"
import KanalOprava4 from "../images/jobs/Kanal-oprava/kanal-oprava-4.jpg"




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
              technique="KUBOTA U-17"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Poulik361, Poulik362, Poulik363, Poulik364]}
              title="I Zámková dlažba 36m2"
              date="8.7.2024 - 9.7.2024"
              description="Navázání obrub na již postavené ztracené bednění, zhotovení lože ze štěrku frakce 4-8, kladení zámkové dlažby. Prostor bude sloužit jako letní kuchyň."
              client="J. Poulík"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[PoulikModel1, PoulikModel2, PoulikModel3, PoulikModel4]}
              title="II Úprava terénu před dlažbou"
              date="10.7.2024"
              description="Úprava terénu ve spádu od zámkové dlažby."
              client="J. Poulík"
              technique="TAKEUCHI TB 216 ÜB, THWAITES MACH 2003"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Pospa2, Pospa1, Pospa3, Pospa4]}
              title="I Přípravné zemní práce kolem RD"
              date="26.6.2024 - 27.6.2024"
              description="Odkop hlíny v prostorech mezi obrubníky a domem, rozvoz štěrků pod dlažbu, příprava prostor pro pergolu, výkop drážky pro štěrk pod gabiony."
              client="P. Pospíšil"
              technique="TAKEUCHI TB 216 ÜB, THWAITES MACH 2003"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[PospaModel1, PospaModel2, PospaModel3, PospaModel4]}
              title="II Modelování břehu na hranici pozemku"
              date="12.7.2024"
              description="Navýšení břehu ze zbylého materiálu z odkopu prostor pro pergolu. Na břehu bude v budoucnu stát pletivový plot."
              client="P. Pospíšil"
              technique="TAKEUCHI TB 216 ÜB, THWAITES MACH 2003"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Sumperk151, Sumperk152, Sumperk153, Sumperk154]}
              title="Velkoformátová dlažba 16m2"
              date="10.7.2024 - 17.7.2024"
              description="Realizace velkoformátové dlažby na klíč. Kompletní zhotovení včetně úprav terénu."
              client="P. Smirous"
              technique="Minibagr K008-3, Cormidi C85"
            />
          </SwiperSlide>
        
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Kolsov1, Kolsov2, Kolsov3, Kolsov4]}
              title="I Zděný plot s hliníkovým polatím"
              date="15.8.2023 - 28.8.2023"
              description="Demolice a následná výstavba nového plotu. Bourání, odvoz suti, zemní práce, odvoz přebytečné zeminy, betonáž, hydroizolace, zdění face-blocků, armování, montáž hliníkového polatí."
              client="M. Krobotová"
              technique="KUBOTA U-17"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Kolsov5, Kolsov6, Kolsov7, Kolsov8]}
              title="II Zděný plot + dlažba"
              date="1.6.2024 - 3.6.2024"
              description="Dostavení zděného plotu o délce 12m, vybourání staré zídky a panelů, příprava pro zámkovou dlažbu vč. usazení obrubníků."
              client="M. Krobotová"
              technique="KUBOTA U-17"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Dm1, Dm2, Dm3, Dm4]}
              title="Okapové chodníky Dolní Morava"
              date="1.6.2024 - 3.6.2024"
              description="Obkopání apartmánového domu, zřízení drenáže, rozvoz štěrků, hutnění podkladu, usazení obrub do betonu."
              client="Metrostav"
              technique="KUBOTA K008-3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[KanalOprava1, KanalOprava2, KanalOprava3, KanalOprava4]}
              title="Oprava kanalizační přípojky z RD"
              date="25.7.2024"
              description="Oprava prokoplé kanalizační přípojky."
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




{/* /> 

 <SwiperSlide>
            <SwiperSlideComponent
              images={[HybesovaImg, HybesovaImg2, HybesovaImg3, HybesovaImg5]}
              title="Zámková dlažba 30m2"
              date="29.4.2024 - 3.5.2024"
              description="add"
              client="add"
              technique="add"
            />
          </SwiperSlide>
        
        
        */}