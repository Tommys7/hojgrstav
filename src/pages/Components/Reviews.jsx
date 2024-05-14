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
    <div className="reviews-section">
      <div className="realization-container">
        <h2 className="section-title">Recenze</h2>
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
                <span className="reviews-user"> E. Hovadová</span>
                <p className="reviews-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Mollitia, tempore?
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="reviews-item">
                <span className="reviews-user"> E. Hovadová</span>
                <p className="reviews-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Mollitia, tempore?
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="reviews-item">
                <span className="reviews-user"> E. Hovadová</span>
                <p className="reviews-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Mollitia, tempore?
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
