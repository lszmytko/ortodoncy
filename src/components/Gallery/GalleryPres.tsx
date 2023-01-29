import React from "react";
import photo1 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-1.jpg";
import photo2 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-2.jpg";
import photo3 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-3.jpg";
import photo4 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-4.jpg";
import photo5 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-5.jpg";
import photo6 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-6.jpg";
import photo7 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-7.jpg";
import photo8 from "../../images/gabinet_photos/gabinet-ortodontyczny-wnetrze-8.jpg";

interface Iprops {
  galleryModalActive: boolean;
  setGalleryModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  activePhotoIndex: number;
  setActivePhotoIndex: React.Dispatch<React.SetStateAction<number>>;
  showGalleryModal: (e: any) => void;
}

const GalleryPres = ({
  galleryModalActive,
  setGalleryModalActive,
  activePhotoIndex,
  setActivePhotoIndex,
  showGalleryModal,
}: Iprops) => {
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
            <img src={photo1} alt="" onClick={showGalleryModal} id="0" />
          </article>

          {/* Photo2 */}
          <article className="Gallery_photo">
            <img src={photo2} alt="" onClick={showGalleryModal} id="1" />
          </article>

          {/* Photo3 */}

          <article className="Gallery_photo">
            <img src={photo3} alt="" onClick={showGalleryModal} id="2" />
          </article>

          {/* Photo4 */}

          <article className="Gallery_photo">
            <img src={photo4} alt="" onClick={showGalleryModal} id="3" />
          </article>

          {/* Photo5 */}

          <article className="Gallery_photo">
            <img src={photo5} alt="" onClick={showGalleryModal} id="4" />
          </article>

          {/* Photo6 */}

          <article className="Gallery_photo">
            <img src={photo6} alt="" onClick={showGalleryModal} id="5" />
          </article>

          {/* Photo7 */}

          <article className="Gallery_photo">
            <img src={photo7} alt="" onClick={showGalleryModal} id="6" />
          </article>

          {/* Photo8 */}

          <article className="Gallery_photo">
            <img src={photo8} alt="" onClick={showGalleryModal} id="7" />
          </article>
        </section>
      </div>
    </section>
  );
};

export default GalleryPres;
