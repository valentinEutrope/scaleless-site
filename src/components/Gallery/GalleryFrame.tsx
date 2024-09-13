
import classnames from "classnames";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineArrowsAlt } from "react-icons/ai";

interface GalleryFrameInterface {
  imageUrl: string;
  isMaxScale: boolean;
  setIsMaxScale: (value: boolean) => void;
  handleNextSlide: () => void;
}

const GalleryFrame = ({
  imageUrl,
  isMaxScale,
  setIsMaxScale,
  handleNextSlide,
}: GalleryFrameInterface) => {
  return (
    <div
      className={classnames("gallery-frame", {
        "gallery-frame--max-scale": isMaxScale,
      })}
      style={{
        background: `center / cover no-repeat url(${imageUrl})`,
      }}
    >
      <div className="gallery-frame__scale">
        <AiOutlineArrowsAlt
          className="gallery-frame__scale-icon"
          size="4rem"
          title={isMaxScale ? "rétrécir" : "agrandir"}
          onClick={() => setIsMaxScale(!isMaxScale)}
        />
      </div>
      <div className="gallery-frame__next">
        <HiOutlineArrowNarrowRight
          className="gallery-frame__next-icon"
          size="4rem"
          onClick={() => handleNextSlide()}
        />
        <div className="gallery-frame__next-label">Next</div>
      </div>
    </div>
  );
};

export default GalleryFrame;
