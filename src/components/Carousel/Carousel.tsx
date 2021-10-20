import React, { useEffect, useState } from "react";
import CarouselPres from "./CarouselPres";
import photo1 from "../../images/ortodoncy_photos/photo1.jpg";
import photo2 from "../../images/ortodoncy_photos/photo2.jpg";
import photo3 from "../../images/ortodoncy_photos/photo3.jpg";
  

const photos = [photo1, photo2, photo3];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let slideInterval: NodeJS.Timeout;

  const handleSlideChange = () :void => {
    setCurrentSlide((prevSlide: number) => {
      if (prevSlide === photos.length - 1) {
        return 0;
      }
      return prevSlide + 1;
    });
  };

  const changeSlideManualy = ( e: React.MouseEvent<HTMLDivElement, MouseEvent>) :void =>{
    clearInterval(slideInterval);
    setCurrentSlide(Number(e.currentTarget.dataset.index))
  }

  const giveClassName = (index: number): string => {
    if (index === currentSlide) {
      return "image active";
    }
    if (
      index - currentSlide === 1 ||
      (index === 0 && currentSlide === photos.length - 1)
    ) {
      return "image next";
    }
    if (
      currentSlide - index === 1 ||
      (index === photos.length - 1 && currentSlide === 0)
    ) {
      return "image previous";
    }
    return "image";
  };

  useEffect(() => {
    slideInterval = setTimeout(() => {
      console.log("zadziałało");
      handleSlideChange();
    }, 5000);
  }, [currentSlide]);
  return <CarouselPres photos={photos} currentSlide={currentSlide} giveClassName={giveClassName} changeSlideManualy = {changeSlideManualy}/>;
};

export default Carousel;
