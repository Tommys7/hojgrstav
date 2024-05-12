import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CalendarImg from "../images/calendar.png";
import ContractImg from "../images/contract.png";

import HybesovaImg from "../images/jobs/IMG_8837.jpg";
import HybesovaImg2 from "../images/jobs/IMG_8841.jpg";
import HybesovaImg3 from "../images/jobs/IMG_8861.jpg";
import HybesovaImg4 from "../images/jobs/IMG_8862.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Realizations = () => {
  return (
    <div className="realization-section">
      <div className="realization-container">
        <h2 className="section-title">Realizace</h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}

          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div>
              <div className="swiper-slide-custom">
                <div className="swiper-slide-imgs">
                  <div className="swiper-slide-item swiper-slide-item-mobile">
                    <img src={HybesovaImg} alt="img" />
                  </div>
                  <div className="swiper-slide-item swiper-slide-item-mobile">
                    <img src={HybesovaImg2} alt="" />
                  </div>
                  <div className="swiper-slide-item swiper-slide-item-mobile">
                    <img src={HybesovaImg3} alt="" />
                  </div>
                  <div className="swiper-slide-item">
                    <img src={HybesovaImg4} alt="" />
                  </div>
                </div>
                <div className="swiper-slide-content">
                  <h3 className="swiper-slide-title">Zámková dlažba 30m2</h3>
                  <div className="swiper-slide-text">
                    <div>
                      <img
                        src={CalendarImg}
                        alt=""
                        className="swiper-slide-icon"
                      />
                    </div>
                    <div>
                      <span>Termín</span>
                      <p className="swiper-slide-date">29.4.2024 - 3.5.2024</p>
                    </div>
                  </div>
                  <div className="swiper-slide-text">
                    <div>
                      <img
                        src={ContractImg}
                        alt=""
                        className="swiper-slide-icon"
                      />
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
                  <div className="swiper-slide-item">
                    <img src={HybesovaImg} alt="img" />
                  </div>
                  <div className="swiper-slide-item swiper-slide-item-mobile">
                    <img src={HybesovaImg2} alt="" />
                  </div>
                  <div className="swiper-slide-item swiper-slide-item-mobile">
                    <img src={HybesovaImg3} alt="" />
                  </div>
                  <div className="swiper-slide-item swiper-slide-item-mobile">
                    <img src={HybesovaImg4} alt="" />
                  </div>
                </div>
                <div className="swiper-slide-content">
                  <h3 className="swiper-slide-title">Zámková dlažba 30m2</h3>
                  <div className="swiper-slide-text">
                    <div>
                      <img
                        src={CalendarImg}
                        alt=""
                        className="swiper-slide-icon"
                      />
                    </div>
                    <div>
                      <span>Termín</span>
                      <p className="swiper-slide-date">29.4.2024 - 3.5.2024</p>
                    </div>
                  </div>
                  <div className="swiper-slide-text">
                    <div>
                      <img
                        src={ContractImg}
                        alt=""
                        className="swiper-slide-icon"
                      />
                    </div>
                    <div>
                      <span>Popis</span>
                      <p className="swiper-slide-date">
                        Kompletní vymyšlení řešení včetně zaměření. Podloží pod
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
        </Swiper>
      </div>
    </div>
  );
};

export default Realizations;
