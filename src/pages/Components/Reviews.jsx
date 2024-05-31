"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Reviews = () => {
  const breakpoints = {
    600: {
      slidesPerView: 2,
    },
  };

  return (
    <div id="Recenze" className="reviews-section pt-16">
      <div className="realization-container">
        <h2 className="section-title !mb-8">Recenze</h2>
        <div className="reviews-grid">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            breakpoints={breakpoints}
          >
            <SwiperSlide>
              <div className="reviews-item">
                <span className="reviews-user"> M. Krobotová</span>
                <p className="reviews-text">
                Stavba plotu proběhla rychle a efektivně. Vše bylo skvěle vysvětleno, přístup byl velmi profesionální. Po dokončení práce proběhla závěrečná úprava zahrady a srovnání terénu do původního stavu. Výsledek předčil naše očekávání, plot vypadá fantasticky. Určitě doporučuji každému!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="reviews-item">
                <span className="reviews-user"> S. Hájková</span>
                <p className="reviews-text">
                Pokládka podlahy s lištami byla provedena rychle a kvalitně. Montáž nábytku a instalace umyvadla na zeď včetně připojení odpadu proběhla bezchybně. Jsme nadmíru spokojeni s výsledkem a rádi doporučíme dál!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="reviews-item">
                <span className="reviews-user"> E. Hovadová</span>
                <p className="reviews-text">
                Bude doplňeno.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
