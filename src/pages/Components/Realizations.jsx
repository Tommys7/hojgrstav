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

import Jakubovice1 from "../images/jobs/Jakubovice-kanal/jakubovice-1.jpg"
import Jakubovice2 from "../images/jobs/Jakubovice-kanal/jakubovice-2.jpg"
import Jakubovice3 from "../images/jobs/Jakubovice-kanal/jakubovice-3.jpg"
import Jakubovice4 from "../images/jobs/Jakubovice-kanal/jakubovice-4.jpg"

import Terasa1 from "../images/jobs/dm-terasa/terasa-1.jpg"
import Terasa2 from "../images/jobs/dm-terasa/terasa-2.jpg"
import Terasa3 from "../images/jobs/dm-terasa/terasa-3.jpg"
import Terasa4 from "../images/jobs/dm-terasa/terasa-4.jpg"

import PospaDlazba1 from "../images/jobs/pospa-dlazba/pospa-dlazba-1.jpg"
import PospaDlazba2 from "../images/jobs/pospa-dlazba/pospa-dlazba-2.jpg"
import PospaDlazba3 from "../images/jobs/pospa-dlazba/pospa-dlazba-3.jpg"
import PospaDlazba4 from "../images/jobs/pospa-dlazba/pospa-dlazba-4.jpg"

import Poklopy1 from "../images/jobs/poklopy/poklopy1.jpg"
import Poklopy2 from "../images/jobs/poklopy/poklopy2.jpg"
import Poklopy3 from "../images/jobs/poklopy/poklopy3.jpg"
import Poklopy4 from "../images/jobs/poklopy/poklopy4.jpg"

import Zvole1 from "../images/jobs/zvole/zvole1.jpg"
import Zvole2 from "../images/jobs/zvole/zvole2.jpg"

import Hradec1 from "../images/jobs/hradec/hradec1.jpg"
import Hradec2 from "../images/jobs/hradec/hradec2.jpg"
import Hradec3 from "../images/jobs/hradec/hradec3.jpg"
import Hradec4 from "../images/jobs/hradec/hradec4.jpg"

import Sudkov1 from "../images/jobs/Skolka/skolka1.jpg"
import Sudkov2 from "../images/jobs/Skolka/skolka2.jpg"
import Sudkov3 from "../images/jobs/Skolka/skolka3.jpg"
import Sudkov4 from "../images/jobs/Skolka/skolka4.jpg"

import Povoden1 from "../images/jobs/Povoden/povoden1.jpg"
import Povoden2 from "../images/jobs/Povoden/povoden2.jpg"
import Povoden3 from "../images/jobs/Povoden/povoden3.jpg"
import Povoden4 from "../images/jobs/Povoden/povoden4.jpg"


import Drenaz1 from "../images/jobs/Drenaz/drenaz1.jpg"
import Drenaz2 from "../images/jobs/Drenaz/drenaz2.jpg"

import Sloupy1 from "../images/jobs/Sloupy/sloupy1.jpg"
import Sloupy2 from "../images/jobs/Sloupy/sloupy2.jpg"




import Dm11 from "../images/jobs/content1/dm1/dm1.jpg"
import Dm12 from "../images/jobs/content1/dm1/dm2.jpg"
import Dm13 from "../images/jobs/content1/dm1/dm3.jpg"
import Dm14 from "../images/jobs/content1/dm1/dm4.jpg"


import Dm21 from "../images/jobs/content1/dm2/dm1.jpg"
import Dm22 from "../images/jobs/content1/dm2/dm2.jpg"
import Dm23 from "../images/jobs/content1/dm2/dm3.jpg"
import Dm24 from "../images/jobs/content1/dm2/dm4.jpg"

import Sud1 from "../images/jobs/content1/sud1/sud1.jpg"
import Sud2 from "../images/jobs/content1/sud1/sud2.jpg"
import Sud3 from "../images/jobs/content1/sud1/sud3.jpg"
import Sud4 from "../images/jobs/content1/sud1/sud4.jpg"

import hejnyKpl1 from "../images/jobs/hejnyKpl/hm1.jpg"
import hejnyKpl2 from "../images/jobs/hejnyKpl/hm2.jpg"
import hejnyKpl3 from "../images/jobs/hejnyKpl/hm3.jpg"
import hejnyKpl4 from "../images/jobs/hejnyKpl/hm4.jpg"

import hejnySt1 from "../images/jobs/hejnySt/hs1.jpg"
import hejnySt2 from "../images/jobs/hejnySt/hs2.jpg"
import hejnySt3 from "../images/jobs/hejnySt/hs3.jpg"
import hejnySt4 from "../images/jobs/hejnySt/hs4.jpg"

import hz1 from "../images/jobs/hejnyZaklad/zaklad1.jpg"
import hz2 from "../images/jobs/hejnyZaklad/zaklad2.jpg"
import hz3 from "../images/jobs/hejnyZaklad/zaklad3.jpg"
import hz4 from "../images/jobs/hejnyZaklad/zaklad4.jpg"

import prijezdovka1 from "../images/jobs/prijezdovka/prijezdovka-1.jpg"
import prijezdovka2 from "../images/jobs/prijezdovka/prijezdovka-2.jpg"


import KolsovSterk1 from "../images/jobs/kolsov-sterk/kolsov-sterk-1.jpg"
import KolsovSterk2 from "../images/jobs/kolsov-sterk/kolsov-sterk-2.jpg"

import Bednari1 from "../images/jobs/bednari/bednari-1.jpg"
import Bednari2 from "../images/jobs/bednari/bednari-2.jpg"

import HradecArrow from "../images/jobs/hradec-arrow/hradec-arrow.jpg"









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
              images={[hejnyKpl1, hejnyKpl2]}
              title="Kompletní realizace zahrady 1000m2"
              date="Květen 2025"
              description="230m2 zpevněných ploch ze tří druhů zámkových dlažeb, okapový chodníček z mramorového kačírku, strojní srovnání pozemku 200t zeminy, ruční srovnání 40t ornice."
              client="R. Hejný"
              technique="Kubota KX080-3a, Wacker Neuson DT-8, Tremix MV480"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperSlideComponent
              images={[prijezdovka1, prijezdovka2]}
              title="Pozemní komunikace 300m2"
              date="Červenec 2025"
              description="300m2 příjezdová cesta sloužící pro 3 parcely, konstruována pro zátěž 20t"
              client="S. Hejný"
              technique="Kubota KX080-3a, Wacker Neuson DT-8, Tremix MV480, Kubota U36-4, Mercedes ATEGO"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[KolsovSterk1, KolsovSterk2]}
              title="Výkop pro základové pasy, uložení štěrku pod základovou desku"
              date="Červen 2025"
              description="Zemní práce, základový pas, ztracené bednění, el. sloupek."
              client="J. Adámková"
              technique="Kubota U36-4, Mercedes ATEGO, Tremix MV480"
            />
          </SwiperSlide>
          <SwiperSlide> {/* Skolka 120m2 */}
            <SwiperSlideComponent
              images={[Sud4]}
              title="Pozemní komunikace 120m2 - Sudkov Školka"
              date="20.11.2024 - 2.12.2024"
              description="Vybourání a následné vybudování pozemní komunikace ze zámkové dlažby."
              client="Obec Sudkov"
              technique="Kubota KX080-3a, Wacker Neuson DT-8, Tremix MV480"
            />
          </SwiperSlide>
          <SwiperSlide> {/* Hovadova */}
            <SwiperSlideComponent
              images={[HybesovaImg5]}
              title="Zámková dlažba 30m2"
              date="29.4.2024 - 3.5.2024"
              description="Kompletní návrh řešení s ohledem na přistavění pergoly včetně zaměření. Klient si vybral přírodní zámkovou dlažbu a zahradní obrubníky."
              client="E. Hovadová"
              technique="KUBOTA U-17"
            />
          </SwiperSlide> 
          <SwiperSlide>
            <SwiperSlideComponent
              images={[hz4]}
              title="Základ ze ztraceného bednění + vyzdění el. sloupku"
              date="Květen 2025"
              description="Zemní práce, základový pas, ztracené bednění, el. sloupek."
              client="R. Hejný"
              technique="Kubota KX080-3a"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Bednari1, Bednari2]}
              title="Zámková dlažba 70m2"
              date="Červen 2025"
              description="Zemní práce, pokládka dlažby"
              client="MUDr. R. Bednář"
              technique="Kubota U36-4, Mercedes ATEGO, Tremix MV480, Wacker Neuson DT-10"
            />
          </SwiperSlide>
          <SwiperSlide> {/* Marcelka zemni prace */}
            <SwiperSlideComponent
              images={[Dm23]}
              title="Zemní práce pro  výstavbu opěrné zdi"
              date="3.3.2025 - 5.3.2025"
              description="Zemní práce dle projektu pro výstavbu opěrné zdi."
              client="Horský resort Dolní Morava"
              technique="Kubota KX080, Wacker Neuson DT-8, Tremix MV480, Manitou, Mercedes Atego 1218"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Jakubovice2]}
              title="Kanalizační přípojka"
              date="3.7.2024"
              description="Napojení kanalizace o délce 20m z domu do zřízené šachty. Usazení pažícího boxu, obsyp pískem, terénní úpravy."
              client="P. Hála"
              technique="TAKEUCHI TB370"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[hejnySt4]}
              title="Rozšíření zámkové dlažby před RD"
              date="Červen 2025"
              description="Realizováno 65m2 nové dlažby, srovnání 40m2 dlažby."
              client="S. Hejný"
              technique="Kubota U36-4, Wacker Neuson DT-8, Tremix MV480"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[HradecArrow]}
              title="Přeložení zámkové dlažby 100m2"
              date="Červen 2025"
              description="Přeložení zámkové dlažby, dlažba byla po letech udržování chem. prostředky zničena."
              client="Arrow Hradec Králové"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Hradec4]}
              title="Základy a rozvody pro nabíjecí stanice"
              date="18.9.2024"
              description="Rozebrání dlažby, silové a datové rozvody, vybetonování základů, složení dlažby."
              client="Volvo Truck Center Hradec Králové"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Dm14]}
              title="Totemy Vista Apartments"
              date="13.10.2024"
              description="Výkop a usazení panelů pro usazení totemů Vista Apartments"
              client="Metrostav"
              technique="KUBOTA U36-4, Manitou"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Poklopy4]}
              title="Vyrovnávání litinových poklopů"
              date="22.8.2024 - 11.9.2024"
              description="Vyrovnávání kanalizačních, teleskopických, hydrantových a šoupátkových poklopů na požadovanou výšku před finálním asfaltem."
              client="Metrostav"
              technique="KUBOTA U36-4, Wacker Neuson DT-8"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Zvole2]}
              title="Velkoformátová pojezdová dlažba 70m2"
              date="10.9.2024 - 11.9.2024"
              description="Srovnání nachystaného štěrkového podkladu a položení velkoformátové dlažby."
              client="R. Kolčava"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Povoden4]}
              title="Oprava pěší komunikace po povodních"
              date="25.9.2024 - 27.9.2024"
              description="Sanace podkladu, usazení VO vč. zabetonování pouzdra, položení zámkové dlažby, osazení hráze lomovým kamenem"
              client="Obec Sudkov"
              technique="KUBOTA U36-4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Terasa4]}
              title="Terasa 48m2"
              date="28.7.2024 - 31.7.2024"
              description="Venkovní terasa z velkoformátové dlažby s vybetonováním 14 pouzder 30x30x80 pro osazení zábradlí."
              client="Metrostav"
              technique="KUBOTA U36-4, Wacker Neuson DT-8"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Sudkov4]}
              title="Pěší komunikace - Sudkov Školka"
              date="28.10.2024 - 31.10.2024"
              description="Likvidace původního asfaltového povrchu, nahrazení zámkovou dlažbou."
              client="Obec Sudkov"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Drenaz2]}
              title="Odvodnění šachet pro sněžná děla"
              date="20.10.2024 - 30.10.2024"
              description="Odvodnění šachet pro sněžná děla"
              technique="KUBOTA KX080"
              client="Horský resort Dolní Morava"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Poulik364]}
              title="I Zámková dlažba 36m2"
              date="8.7.2024 - 9.7.2024"
              description="Navázání obrub na již postavené ztracené bednění, zhotovení lože ze štěrku frakce 4-8, kladení zámkové dlažby. Prostor bude sloužit jako letní kuchyň."
              client="J. Poulík"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[PoulikModel4]}
              title="II Úprava terénu před dlažbou"
              date="10.7.2024"
              description="Úprava terénu ve spádu od zámkové dlažby."
              client="J. Poulík"
              technique="TAKEUCHI TB 216 ÜB, THWAITES MACH 2003"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Pospa4]}
              title="I Přípravné zemní práce kolem RD"
              date="26.6.2024 - 27.6.2024"
              description="Odkop hlíny v prostorech mezi obrubníky a domem, rozvoz štěrků pod dlažbu, příprava prostor pro pergolu, výkop drážky pro štěrk pod gabiony."
              client="P. Pospíšil"
              technique="TAKEUCHI TB 216 ÜB, THWAITES MACH 2003"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[PospaModel4]}
              title="II Modelování břehu na hranici pozemku"
              date="12.7.2024"
              description="Navýšení břehu ze zbylého materiálu z odkopu prostor pro pergolu. Na břehu bude v budoucnu stát pletivový plot."
              client="P. Pospíšil"
              technique="TAKEUCHI TB 216 ÜB, THWAITES MACH 2003"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Sloupy2]}
              title="III Betonové sloupy"
              date="18.7.2024 - 19.7.2024"
              description="Vyvrtání děr, zabetonování sloupů pro plot"
              client="P. Pospíšil"
              technique="TAKEUCHI TB 216 ÜB, THWAITES MACH 2003"
            />
          </SwiperSlide>

          {/* <SwiperSlide>
            <SwiperSlideComponent
              images={[PospaDlazba4]}
              title="IV Zámková dlažba 120m2"
              date="25.7.2024 - 26.7.2024"
              description="Hutnění, srovnání podkladu štěrkem 4-8, položení dlažby."
              client="P. Pospíšil"
            />
          </SwiperSlide>
           */}
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Sumperk154]}
              title="Velkoformátová dlažba 16m2"
              date="10.7.2024 - 17.7.2024"
              description="Realizace velkoformátové dlažby na klíč. Kompletní zhotovení včetně úprav terénu."
              client="P. Smirous"
              technique="KUBOTA K008-3, Cormidi C85"
            />
          </SwiperSlide>
        
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Kolsov4]}
              title="I Zděný plot s hliníkovým polatím"
              date="15.8.2023 - 28.8.2023"
              description="Demolice a následná výstavba nového plotu. Bourání, odvoz suti, zemní práce, odvoz přebytečné zeminy, betonáž, hydroizolace, zdění face-blocků, armování, montáž hliníkového polatí."
              client="M. Krobotová"
              technique="KUBOTA U-17"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Kolsov8]}
              title="II Zděný plot + dlažba"
              date="1.6.2024 - 3.6.2024"
              description="Dostavení zděného plotu o délce 12m, vybourání staré zídky a panelů, příprava pro zámkovou dlažbu vč. usazení obrubníků."
              client="M. Krobotová"
              technique="KUBOTA U-17"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComponent
              images={[Dm4]}
              title="Okapové chodníky Dolní Morava"
              date="1.6.2024 - 3.6.2024"
              description="Obkopání apartmánových domů, zřízení drenáže, rozvoz štěrků, hutnění podkladu, usazení obrub do betonu."
              client="Metrostav"
              technique="KUBOTA K008-3, Wacker Neuson DT-8"
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <SwiperSlideComponent
              images={[KanalOprava4]}
              title="Oprava kanalizační přípojky z RD"
              date="25.7.2024"
              description="Oprava prokoplé kanalizační přípojky."
            />
          </SwiperSlide> */}
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