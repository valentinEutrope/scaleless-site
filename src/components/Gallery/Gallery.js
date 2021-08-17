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
  "https://www.fillmurray.com/525/355",
];

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__three-images">
        <img className="gallery__image" src={IMAGES[0]} />
        <img className="gallery__image" src={IMAGES[1]} />
        <img className="gallery__image" src={IMAGES[2]} />
      </div>

      <div className="gallery__four-images">
        <img className="gallery__image" src={IMAGES[3]} />
        <img className="gallery__image" src={IMAGES[4]} />
        <img className="gallery__image" src={IMAGES[5]} />
        <img className="gallery__image" src={IMAGES[6]} />
      </div>
    </div>
  );
};

export default Gallery;
