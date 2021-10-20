import React, { useEffect, useRef } from "react";

const Prices = () => {
    const scrollRef = React.useRef<HTMLInputElement>(null);

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [])
  return (
    <section className="Prices" ref={scrollRef}>
      <div className="section-center">
        <div className="title">
          <h3>cennik</h3>
          <div className="underline"></div>
        </div>

        {/* SECTION 1 */}
        <div className="price-section">
          <div className="price-section-header">
            <h3>ortodoncja</h3>
          </div>
          <div className="price-section-description">
            <p>
              Po zapoznaniu się charakterem wady zgryzu i zaplanowaniu leczenia
              przygotujemy pełną informację o całkowitej cenie leczenia
              ortodontycznego. W naszej Klinice jest możliwość zawarcia umowy ,
              dzięki której nasi Pacjenci mają pewność, że nie zaskoczą ich
              dodatkowe koszty, a cena leczenia nie ulegnie zmianie.
            </p>
          </div>
          <section className="price-details">
            <article className="service-detail">
              <p>Konsultacja ortodontyczna</p>
              <div className="service_detail_prices">
                <p className="price">150zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Modele diagnostyczne</p>
              <div className="service_detail_prices">
                <p className="price">150zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Aparat metalowy</p>
              <div className="service_detail_prices">
                <p className="price_before_reduction">1900zł</p>
                <p className="price">1615zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Aparat estetyczny kryształowy</p>
              <div className="service_detail_prices">
                <p className="price_before_reduction">2800zł</p>
                <p className="price">2550zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Aparat Damon estetyczny</p>
              <div className="service_detail_prices">
                <p className="price_before_reduction">4000zł</p>
                <p className="price">3500zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Szyna relaksacyjna</p>
              <div className="service_detail_prices">
                <p className="price">750zł</p>
              </div>
            </article>
          </section>
        </div>

        {/* SECTION 2 */}
        <div className="price-section">
          <div className="price-section-header">
            <h3>profilaktyka</h3>
          </div>
          <section className="price-details">
            <article className="service-detail">
              <p>
                Higienizacja (piaskowanie, skaling, polerowanie, fluoryzacja
                pianka)
              </p>
              <div className="service_detail_prices">
                <p className="price">250zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Higienizacja dla pacjentów w leczeniu ortodontycznym</p>
              <div className="service_detail_prices">
                <p className="price">250zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Piaskowanie zębów + polerowanie</p>
              <div className="service_detail_prices">
                <p className="price">150zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Skaling-ultradźwiękowe usunięcie kamienia + polerowanie</p>
              <div className="service_detail_prices">
                <p className="price">150zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Fluoryzacja ampułką Fluor Protector</p>
              <div className="service_detail_prices">
                <p className="price">300zł</p>
              </div>
            </article>
          </section>
        </div>

        {/* SECTION 3 */}
        <div className="price-section">
          <div className="price-section-header">
            <h3>STOMATOLOGIA ZACHOWAWCZA</h3>
          </div>
          <section className="price-details">
            <article className="service-detail">
              <p>Badanie stomatologiczne z omówieniem</p>
              <div className="service_detail_prices">
                <p className="price">100zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Znieczulenie</p>
              <div className="service_detail_prices">
                <p className="price">30zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Znieczulenie komputerowe Calajet</p>
              <div className="service_detail_prices">
                <p className="price">50zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Sedacja wziewna (gaz rozweselający)</p>
              <div className="service_detail_prices">
                <p className="price">100zł/30min</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Wypełnienie światłoutwardzalne</p>
              <div className="service_detail_prices">
                <p className="price">300-500zł</p>
              </div>
            </article>
          </section>
        </div>

        {/* SECTION 4 */}
        <div className="price-section">
          <div className="price-section-header">
            <h3>PROTETYKA</h3>
          </div>
          <section className="price-details">
            <article className="service-detail">
              <p>Konsultacja protetyczna</p>
              <div className="service_detail_prices">
                <p className="price">100zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Korona tymczasowa kompozytowa</p>
              <div className="service_detail_prices">
                <p className="price">150zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Korona porcelanowa na metalu</p>
              <div className="service_detail_prices">
                <p className="price">1000zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Inlay/onlay porcelanowy</p>
              <div className="service_detail_prices">
                <p className="price">700zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Inlay kompozytowy</p>
              <div className="service_detail_prices">
                <p className="price">450zł</p>
              </div>
            </article>
          </section>
        </div>

        {/* SECTION 5 */}
        <div className="price-section">
          <div className="price-section-header">
            <h3>rtg</h3>
          </div>
          <section className="price-details">
            <article className="service-detail">
              <p>Pantomogram</p>
              <div className="service_detail_prices">
                <p className="price">85zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Cefalometria</p>
              <div className="service_detail_prices">
                <p className="price">85zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Tomografia 10x8,5</p>
              <div className="service_detail_prices">
                <p className="price">250zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Tomografia 10x7 (dzieci)</p>
              <div className="service_detail_prices">
                <p className="price">250zł</p>
              </div>
            </article>
            <article className="service-detail">
              <p>Tomografia odcinkowa</p>
              <div className="service_detail_prices">
                <p className="price">150zł</p>
              </div>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Prices;
