import briefcase from "../../images/whyus_photos/briefcase.jpg";
import alert from "../../images/whyus_photos/alert.jpg";
import calendar from "../../images/whyus_photos/calendar.jpg";
import parking from "../../images/whyus_photos/parking.jpg";
import scissors from "../../images/whyus_photos/scissors.jpg";
import smile from "../../images/whyus_photos/smile.jpg";

const WhyUs = () => {
  return (
    <section className="WhyUs">
      <section className="section-center WhyUs_container">
        <div className="title">
          <h3>dlaczego my?</h3>
          <div className="underline"></div>
        </div>

        {/* INFOS */}

        {/* INFO1 */}

        <section className="WhyUs_info">
          <article className="details">
            <div className="details_image">
              <img src={briefcase} alt="briefcase" />
            </div>
            <h4 className="details_header">Profesjonalizm</h4>
            <p className="details_text">
              Gruntowne wykształcenie medyczne naszych lekarzy pozwala nam
              świadczyć usługi na najwyższym poziomie.
            </p>
          </article>

          {/* INFO2 */}

          <article className="details">
            <div className="details_image">
              <img src={scissors} alt="scissors" />
            </div>
            <h4 className="details_header">cena</h4>
            <p className="details_text">
              Atrakcyjne ceny za usługi stomatologiczne oraz całe leczenie
              ortodontyczne. Promocje na aparat ortodontyczny.
            </p>
          </article>

          {/* INFO3 */}

          <article className="details">
            <div className="details_image">
              <img src={alert} alt="alert" />
            </div>
            <h4 className="details_header">Bezpieczeństwo</h4>
            <p className="details_text">
              Spełniamy rygorystyczne normy w zakresie zasad sterylizacji.
            </p>
          </article>

          {/* INFO4 */}

          <article className="details">
            <div className="details_image">
              <img src={smile} alt="smile" />
            </div>
            <h4 className="details_header">Miła atmosfera</h4>
            <p className="details_text">
              Kameralne gabinety pozwalają naszym Pacjentom czuć się swobodnie
              podczas wizyt.
            </p>
          </article>

          {/* INFO5 */}

          <article className="details">
            <div className="details_image">
              <img src={calendar} alt="calendar" />
            </div>
            <h4 className="details_header">Szybka rejestracja</h4>
            <p className="details_text">
              Krótki czas oczekiwania na wizytę u lekarza specjalisty. Dobry
              ortodonta na już.
            </p>
          </article>

          {/* INFO6 */}

          <article className="details">
            <div className="details_image">
              <img src={parking} alt="parking" />
            </div>
            <h4 className="details_header">Parking dla pacjentów</h4>
            <p className="details_text">
              Na naszych pacjentów, zawsze czeka bezpłatny parking.
            </p>
          </article>
        </section>
      </section>
    </section>
  );
};

export default WhyUs;
