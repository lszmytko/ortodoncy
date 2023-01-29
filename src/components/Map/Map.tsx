import { FiMapPin } from "react-icons/fi";
import { BsTelephone, BsFillEnvelopeFill } from "react-icons/bs";

const Map = () => {
  return (
    <div className="Map">
      <div className="title">
        <h3>kontakt z nami</h3>
        <div className="underline"></div>
      </div>
      <div className="Map_container">
        <iframe
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:EiZHcm9jaG93c2thIDExLCAwNC0xNDggV2Fyc3phd2EsIFBvbGFuZCJQEk4KNAoyCUMO41500h5HEefll2w2lwTBGh4LEO7B7qEBGhQKEgkz5oGRlc0eRxHZ9r7KAFZGAAwQCyoUChIJc-V0k5XNHkcRt_rgZ3gBrcw&key=AIzaSyB5rehJ3p0NlQPFqDyJoeFCZAZbxOzEDBU"
        ></iframe>
        <div className="contact_info">
          <div className="contact_info_container">
            <FiMapPin className=" icon" />
            <div className="kontakt">
              <h4>04-148 Warszawa - Grochów</h4>
              <h4>ul. Grochowska 11</h4>
            </div>
            <BsTelephone className="icon" />
            <div className="phone">
              <h4>+48 800 000 000</h4>
            </div>
            <BsFillEnvelopeFill className="icon" />
            <div className="email">
              <h4>@ortodonta@wp.pl</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
