import Image from "next/image";
import { useState, useEffect } from "react";
import Close from "../images/close.png";

const Announcement = () => {
  const [isAnnouncementOpen, setisAnnouncementOpen] = useState(true);

  const closeAnnouncement = () => {
    setisAnnouncementOpen(false); // Set isMobileMenuOpen to false when clicked
  };

  useEffect(() => {
    if (isAnnouncementOpen) {
      document.body.classList.add("overflow-hidden-custom");
    } else {
      document.body.classList.remove("overflow-hidden-custom");
    }
  }, [isAnnouncementOpen]);

  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center announcement-wrap ${isAnnouncementOpen ? '' : 'hidden'}`}>
      <div className="bg-gray-200 announcement-text flex items-center justify-center relative">
        <h2 className="md:text-2xl">
          Web je plně funkční, projekty budou doplněny časem. Děkujeme za pochopení.
        </h2>
        <button onClick={closeAnnouncement} className="announcement-close">
          <Image
            className="m-auto"
            width={16}
            height={16}
            src={Close}
            alt="Křížek"
          />
        </button>
      </div>
    </div>
  );
};

export default Announcement;
