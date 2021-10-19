import React from "react";

interface Iprops {
  photos: string[];
  currentSlide: number;
  giveClassName: (index: number) => string;
  changeSlideManualy: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const CarouselPres = ({
  photos,
  currentSlide,
  giveClassName,
  changeSlideManualy,
}: Iprops) => {
  return (
    <div className="Carousel">
      <div className="Carousel_container section-center">
        {photos.map((photo, index) => {
          return (
            <div className="image_container" key={index}>
              <img
                src={photos[index]}
                alt=""
                className={
                  index === currentSlide ? "active image" : "inactive image"
                }
              />
            </div>
          );
        })}

        <section className="dots">
          <div
            className="dot"
            data-index="0"
            onClick={changeSlideManualy}
            style={{ background: currentSlide === 0 ? "white" : "initial" }}
          ></div>
          <div
            className="dot"
            data-index="1"
            onClick={changeSlideManualy}
            style={{ background: currentSlide === 1 ? "white" : "initial" }}
          ></div>
          <div
            className="dot"
            data-index="2"
            onClick={changeSlideManualy}
            style={{ background: currentSlide === 2 ? "white" : "initial" }}
          ></div>
        </section>
      </div>
    </div>
  );
};

export default CarouselPres;
