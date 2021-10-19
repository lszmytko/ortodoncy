import React, { useState } from "react";
import photo1 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-1.jpg";
import photo2 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-2.jpg";
import photo3 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-3.jpg";
import photo4 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-4.jpg";
import photo5 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-5.jpg";
import photo6 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-6.jpg";
import photo7 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-7.jpg";
import photo8 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-8.jpg";
import GalleryCarousel from "../GalleryCarousel/GalleryCarousel";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

interface Iprops {
  galleryModalActive: boolean;
  setGalleryModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const GalleryPres = ({ galleryModalActive, setGalleryModalActive }: Iprops) => {
  if (galleryModalActive) {
    return (
      <GalleryCarousel
        photos={photos}
        setGalleryModalActive={setGalleryModalActive}
      />
    );
  }

  return (
    <section className="Gallery">
      <div className="section-center">
        <div className="title">
          <h3>Gdzie przyjmuje ortodonta - zdjęcia naszego gabinetu</h3>
          <div className="underline"></div>
        </div>

        <section className="Gallery_container">
          {/* Photo1 */}
          <article className="Gallery_photo">
            <img
              src={photo1}
              alt=""
              onClick={() => setGalleryModalActive(true)}
            />
          </article>

          {/* Photo2 */}
          <article className="Gallery_photo">
            <img
              src={photo2}
              alt=""
              onClick={() => setGalleryModalActive(true)}
            />
          </article>

          {/* Photo3 */}

          <article className="Gallery_photo">
            <img
              src={photo3}
              alt=""
              onClick={() => setGalleryModalActive(true)}
            />
          </article>

          {/* Photo4 */}

          <article className="Gallery_photo">
            <img
              src={photo4}
              alt=""
              onClick={() => setGalleryModalActive(true)}
            />
          </article>

          {/* Photo5 */}

          <article className="Gallery_photo">
            <img
              src={photo5}
              alt=""
              onClick={() => setGalleryModalActive(true)}
            />
          </article>

          {/* Photo6 */}

          <article className="Gallery_photo">
            <img
              src={photo6}
              alt=""
              onClick={() => setGalleryModalActive(true)}
            />
          </article>

          {/* Photo7 */}

          <article className="Gallery_photo">
            <img
              src={photo7}
              alt=""
              onClick={() => setGalleryModalActive(true)}
            />
          </article>

          {/* Photo8 */}

          <article className="Gallery_photo">
            <img
              src={photo8}
              alt=""
              onClick={() => setGalleryModalActive(true)}
            />
          </article>
        </section>
      </div>
    </section>
  );
};

export default GalleryPres;
