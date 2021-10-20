import React from "react";
import dentist1 from "../../images/dentists_photos/dentist1.jpg";
import dentist2 from "../../images/dentists_photos/dentist2.jpg";
import dentist3 from "../../images/dentists_photos/dentist3.jpg";
import dentist4 from "../../images/dentists_photos/dentist4.jpg";
import dentist5 from "../../images/dentists_photos/dentist5.jpg";

const Dentists = () => {
  const scrollRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="Dentists" ref={scrollRef}>
      <div className="title">
        <h3>zespół</h3>
        <div className="underline"></div>
      </div>
      <section className="section-center images">
        {/* 1 person */}
        <div className="image_container">
          <div className="image_container_front side">
            <img src={dentist1} alt="" />
          </div>
          <div className="image_container_back side">
            <h4 className="image_container_back_name">Agnieszka Xyz</h4>
            <h4 className="image_container_back_profession">Lekarz dentysta</h4>
            <h4 className="image_container_back_experience">
              15 lat doświadczenia
            </h4>
            <p className="image_container_back_text">
              "Zależy mi na profesjonalnym, a także pełnym zaangażowania i
              życzliwości podejściu do potrzeb moich Pacjentów. Uśmiech każdego
              z nich daje największą satysfakcję z wykonywanej pracy."
            </p>
          </div>
        </div>

        {/* 2 person */}
        <div className="image_container">
          <div className="image_container_front side">
            <img src={dentist2} alt="" />
          </div>
          <div className="image_container_back side">
            <h4 className="image_container_back_name">Arkadiusz Xyz</h4>
            <h4 className="image_container_back_profession">Protetyk</h4>
            <h4 className="image_container_back_experience">
              10 lat doświadczenia
            </h4>
            <p className="image_container_back_text">
              "Dokładam wszelkich starań żeby piękny uśmiech stał się wizytówka
              moich Pacjentów, a leczenie odbywało się życzliwej, przyjaznej i
              bezstresowej atmosferze."
            </p>
          </div>
        </div>

        {/* 3 person */}
        <div className="image_container">
          <div className="image_container_front side">
            <img src={dentist3} alt="" />
          </div>
          <div className="image_container_back side">
            <h4 className="image_container_back_name">Eliza Xyz</h4>
            <h4 className="image_container_back_profession">Lekarz dentysta</h4>
            <h4 className="image_container_back_experience">
              15 lat doświadczenia
            </h4>
            <p className="image_container_back_text">
              "Zdaję sobie sprawę, że wielu Pacjentów odczuwa lęk przed wizytą u
              stomatologa, dlatego chcę leczyć również ze strachu przed
              dentystą. Cechuje się spokojem i staram się stworzyć podczas
              wizyty komfortowe i bezstresowe warunki oraz tłumaczyć każdy etap
              swojej pracy."
            </p>
          </div>
        </div>

        {/* 4 person */}
        <div className="image_container">
          <div className="image_container_front side">
            <img src={dentist4} alt="" />
          </div>
          <div className="image_container_back side">
            <h4 className="image_container_back_name">Jan Xyz</h4>
            <h4 className="image_container_back_profession">Lekarz dentysta</h4>
            <h4 className="image_container_back_experience">
              20 lat doświadczenia
            </h4>
            <p className="image_container_back_text">
              "Począwszy od pierwszej wizyty staram się stworzyć w gabinecie
              miłą atmosferę, by Pacjent czuł się swobodnie i komfortowo, a po
              obejrzeniu efektów leczenia wiedział, że znajduje się pod
              profesjonalną opieką."
            </p>
          </div>
        </div>

        {/* 5 person */}
        <div className="image_container">
          <div className="image_container_front side">
            <img src={dentist5} alt="" />
          </div>
          <div className="image_container_back side">
            <h4 className="image_container_back_name">Robert Xyz</h4>
            <h4 className="image_container_back_profession">Lekarz dentysta</h4>
            <h4 className="image_container_back_experience">
              8 lat doświadczenia
            </h4>
            <p className="image_container_back_text">
              "Zawsze staram się nadążyć za rozwojem swojej dziedziny. Moimi
              narzędziami są najnowsze osiągnięcia technologiczne, sprawdzone
              techniki zabiegowe, a także oczy, ręce oraz gromadzone
              doświadczenie. To wszystko pozwala mi odróżnić rzetelny postęp w
              stomatologii od chwilowej mody."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dentists;
