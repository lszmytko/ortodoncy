import React, { useState, useRef } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

interface Iprops {
  photos: string[];
  setGalleryModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const GalleryCarousel = ({ photos, setGalleryModalActive }: Iprops) => {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <div
      className="GalleryCarousel"
      onClick={() => setGalleryModalActive(false)}
    >
      <div
        id="carouselExampleControls"
        className="carousel slide GalleryCarousel_container"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {photos.map((photo, index) => {
            return (
              <div
                className={
                  index === activePhoto
                    ? "carousel-item active img_container"
                    : "carousel-item"
                }
                key={index}
              >
                <img
                  src={photos[index]}
                  className="d-block w-100"
                  alt={"photo"}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          // onClick={handleMoveBackward}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          onClick={(e) => {
            e.stopPropagation();
          }}
          // onClick={handleMoveForward}
        >
          <span>
            <AiOutlineArrowRight className="right"/>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default GalleryCarousel;
