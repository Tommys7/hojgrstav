import React from "react";
import Image from "next/image";

import CalendarImg from "../images/calendar.png";
import ContractImg from "../images/contract.png";
import UserImg from "../images/user.png";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

function SwiperSlideComponent({ images = [], title, date, description, client }) {
  const [open, setOpen] = React.useState(false);
  const lightboxSlides = images.map(image => {
    if (typeof image === 'string') {
      return { src: image };
    } else if (image && image.src) {
      return { src: image.src };
    } else {
      console.error('Invalid image format:', image);
      return { src: '' };
    }
  });
  return (
    <div>
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .6)" } }}

        open={open}
        plugins={[Thumbnails, Zoom]}
        close={() => setOpen(false)}
        slides={lightboxSlides}

      />
      <div className="swiper-slide-custom">
        <button onClick={() => setOpen(true)} className="swiper-slide-btn">Otevřít galerii projektu</button>
        <div className="swiper-slide-imgs">
          {images.map((src, index) => (
            <div key={index} className="swiper-slide-item">
              <Image
                onClick={() => setOpen(true)}
                src={src}
                fill={true}
                placeholder="blur"
                alt="Zakázka"
                className="!static"
              />
            </div>
          ))}
        </div>
        <div className="swiper-slide-content">
          <h3 className="swiper-slide-title">{title}</h3>
          {/* <div className="swiper-slide-text">
            <div>
              <Image
                src={CalendarImg}
                fill={true}
                placeholder="blur"
                className="swiper-slide-icon !static"
                alt="Ikona"
              />
            </div>
            <div>
              <span>Termín</span>
              <p className="swiper-slide-date">{date}</p>
            </div>
          </div> */}
          <div className="swiper-slide-text">
            <div>
              <Image
                src={ContractImg}
                fill={true}
                placeholder="blur"
                className="swiper-slide-icon !static"
                alt="Ikona"
              />
            </div>
            <div>
              <span>Popis</span>
              <p className="swiper-slide-date">{description}</p>
            </div>
          </div>
          <div className="swiper-slide-text">
            <div>
              <Image
                src={UserImg}
                fill={true}
                placeholder="blur"
                className="swiper-slide-icon !static"
                alt="Ikona"
              />
            </div>
            <div>
              <span>Klient</span>
              <p className="swiper-slide-date">{client}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwiperSlideComponent;
