import React, { useState } from "react";
import GalleryCarousel from "../GalleryCarousel/GalleryCarousel";
import GalleryPres from "./GalleryPres";
import photo1 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-1.jpg";
import photo2 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-2.jpg";
import photo3 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-3.jpg";
import photo4 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-4.jpg";
import photo5 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-5.jpg";
import photo6 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-6.jpg";
import photo7 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-7.jpg";
import photo8 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-8.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

const Gallery = () => {
  const [galleryModalActive, setGalleryModalActive] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const showGalleryModal = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ): void => {
    setGalleryModalActive(true);
    setActivePhotoIndex(Number((e.target as HTMLImageElement).id));
  };

  if (galleryModalActive) {
    return (
      <GalleryCarousel
        photos={photos}
        setGalleryModalActive={setGalleryModalActive}
        activePhotoIndex={activePhotoIndex}
      />
    );
  }
  return (
    <GalleryPres
      galleryModalActive={galleryModalActive}
      setGalleryModalActive={setGalleryModalActive}
      activePhotoIndex={activePhotoIndex}
      setActivePhotoIndex={setActivePhotoIndex}
      showGalleryModal={showGalleryModal}
    />
  );
};

export default Gallery;
