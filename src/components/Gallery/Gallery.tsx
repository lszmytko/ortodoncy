import React, { useState } from "react";
import GalleryPres from "./GalleryPres";

const Gallery = () => {
  const [galleryModalActive, setGalleryModalActive] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  return <GalleryPres galleryModalActive={galleryModalActive} setGalleryModalActive={setGalleryModalActive}/>;
};

export default Gallery;
