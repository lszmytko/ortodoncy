import { BsFillTelephoneFill } from "react-icons/bs";

const MainInfo = () => {
  return (
    <div className="MainInfo">
      <div className="MainInfo_container">
        <div className="openingHoursAndAddressContainer">
          <div className="openingHours">
            <p>
              Godziny otwarcia: Poniedziałek-Piątek 9.00 - 20.00; Sobota 9.00 -
              13.00{" "}
            </p>
          </div>
          <div className="address">
            <p>02-777 Warszawa, ul. Kolejna 20 lokal 007</p>
          </div>
        </div>
        <div className="phone">
          <span>
            <BsFillTelephoneFill />
          </span>
          <p>Rejestracja: 507 400 350</p>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
