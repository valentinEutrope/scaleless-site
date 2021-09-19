import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const IMAGES = [
  {
    id: 1,
    url: "assets/images/_1180898.JPG",
  },
  {
    id: 2,
    url: "assets/images/_1180969.JPG",
  },
  {
    id: 3,
    url: "assets/images/_1190017.JPG",
  },
  {
    id: 4,
    url: "assets/images/_1190020.JPG",
  },
  {
    id: 5,
    url: "assets/images/_1190066.JPG",
  },
  {
    id: 6,
    url: "assets/images/_1190071.JPG",
  },
];

const Gallery = () => {
  const [cursor, setCursor] = useState(0);
  const [handleAnimated, setHandleAnimated] = useState(false);
  const frameRef = useRef();

  useEffect(() => {
    if (handleAnimated) {
      gsap.to(frameRef.current, {
        opacity: 0,
        onComplete: () => {
          handleNextSlide();
          gsap.to(frameRef.current, { opacity: 1 });
        },
      });
    }
  }, [handleAnimated, setHandleAnimated]);

  const handleNextSlide = () => {
    if (cursor === IMAGES.length - 1) {
      setCursor(0);
    } else {
      setCursor(cursor + 1);
    }

    setHandleAnimated(false);
  };

  return (
    <div className="gallery">
      <div
        className="gallery__back"
        style={{
          background: `center / cover no-repeat url(${IMAGES[cursor].url})`,
        }}
      ></div>
      <div
        className="gallery__frame"
        ref={frameRef}
        style={{
          background: `center / cover no-repeat url(${IMAGES[cursor].url})`,
        }}
      >
        <div className="gallery__next-btn-container">
          <HiOutlineArrowNarrowRight
            className="gallery__icon"
            size="3rem"
            onClick={() => setHandleAnimated(true)}
          />
          <div className="gallery__next">Next</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
