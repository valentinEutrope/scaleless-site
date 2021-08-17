import React from "react";

import "./gallery.scss";

const IMAGES = [
  "https://www.fillmurray.com/520/350",
  "https://www.fillmurray.com/540/355",
  "https://www.fillmurray.com/510/360",
  "https://www.fillmurray.com/320/460",
  "https://www.fillmurray.com/320/470",
  "https://www.fillmurray.com/330/480",
  "https://www.fillmurray.com/340/490",
  "https://www.fillmurray.com/565/355",
  "https://www.fillmurray.com/575/355",
  "https://www.fillmurray.com/585/355",
];

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__three-images">
        <div className="gallery__container">
          <img className="gallery__image" src={IMAGES[0]} />
        </div>
        <div className="gallery__container">
          <img className="gallery__image" src={IMAGES[1]} />
        </div>
        <div className="gallery__container">
          <img className="gallery__image" src={IMAGES[2]} />
        </div>
      </div>

      <div className="gallery__four-images">
        <div className="gallery__container">
          <img className="gallery__image" src={IMAGES[3]} />
        </div>
        <div className="gallery__container">
          <img className="gallery__image" src={IMAGES[4]} />
        </div>
        <div className="gallery__container">
          <img className="gallery__image" src={IMAGES[5]} />
        </div>
        <div className="gallery__container">
          <img className="gallery__image" src={IMAGES[6]} />
        </div>
      </div>

      <div className="gallery__three-images">
        <div className="gallery__container">
          <img className="gallery__image" src={IMAGES[7]} />
        </div>
        <div className="gallery__container">
          <img className="gallery__image" src={IMAGES[8]} />
        </div>
        <div className="gallery__container">
          <img className="gallery__image" src={IMAGES[9]} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
