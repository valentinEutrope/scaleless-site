import React, { useState } from "react";
import { VscArrowSmallRight } from "react-icons/vsc";

const IMAGES = [
  {
    id: 1,
    url: "https://www.fillmurray.com/320/460",
  },
  {
    id: 2,
    url: "https://www.fillmurray.com/320/470",
  },
  {
    id: 3,
    url: "https://www.fillmurray.com/330/480",
  },
  {
    id: 4,
    url: "https://www.fillmurray.com/1600/1200",
  },
  {
    id: 5,
    url: "https://www.fillmurray.com/575/355",
  },
  {
    id: 6,
    url: "https://www.fillmurray.com/1650/1300",
  },
];

const Gallery = () => {
  const [cursor, setCursor] = useState(0);

  const handleNextSlide = () => {
    if (cursor === IMAGES.length - 1) {
      setCursor(0);
    } else {
      setCursor(cursor + 1);
    }
  };

  return (
    <div className="gallery">
      <div
        className="gallery__back"
        style={{
          background: `url(${IMAGES[cursor].url}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="gallery__frame"
        style={{
          background: `url(${IMAGES[cursor].url}) no-repeat`,
          backgroundSize: "100% 140%",
          backgroundPosition: "center",
        }}
      >
        <VscArrowSmallRight
          className="gallery__icon"
          size="3em"
          onClick={() => handleNextSlide()}
        />
      </div>
    </div>
  );
};

export default Gallery;
