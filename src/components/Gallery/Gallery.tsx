import { useState } from "react";
import GalleryFrame from "./GalleryFrame";

const Gallery = ({ images }) => {
  const [cursor, setCursor] = useState(0);
  const [isMaxScale, setIsMaxScale] = useState(false);

  const handleNextSlide = () => {
    if (cursor === images.length - 1) {
      setCursor(0);
    } else {
      setCursor(cursor + 1);
    }
  };

  return (
    <div id="gallery" className="gallery">
      {images.map((image, index) => {
        return (
          <div
            key={`back-${index}`}
            className={`gallery__back ${cursor === index ? "active" : ""}`}
            style={{
              background: `center / cover no-repeat url(${image.url})`,
            }}
          ></div>
        );
      })}
      <GalleryFrame
        imageUrl={images[cursor].url}
        isMaxScale={isMaxScale}
        setIsMaxScale={setIsMaxScale}
        handleNextSlide={handleNextSlide}
      />
    </div>
  );
};

export default Gallery;
