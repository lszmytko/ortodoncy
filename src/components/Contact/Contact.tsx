import React from "react";

const Contact = () => {
  return (
    <div className="Contact">
      <section className="section-center">
        <div className="title">
          <h3>kontakt</h3>
          <div className="underline"></div>
        </div>
        <div className="address">
          <p>
            ul. Grochowska 11, <br></br> 04-148 Warszawa - Grochów
          </p>
        </div>
        <p className="tel">
          tel: <strong>+48 800 000 000</strong>
        </p>
        <p className="email">
          <strong>xyz@gmail.com</strong>
        </p>
        <div className="title">
          <h3>napisz do nas</h3>
          <div className="underline"></div>
        </div>
        <form action="https://formsubmit.co/lszmytko@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Twoje imię" required />
          <input type="text" name="name" placeholder="Telefon kontaktowy" required />
          <input type="email" name="email" placeholder="Adres-email" required />
          <textarea name="message" placeholder="Twoja wiadomość" id="" cols={30} rows={10}></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
