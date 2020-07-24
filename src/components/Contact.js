import React, { useState, useEffect } from "react";

import Decoration from "../assets/Decoration.svg";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    if (name === "" || name.length === 0 || name.indexOf(" ") !== -1) {
      setErrors((prevState) => [
        ...prevState,
        "Podane imię jest nieprawidłowe",
      ]);
    } else {
      setErrors((prevState) => [...prevState, true]);
    }

    if (email.indexOf("@") === -1 || email.length === 0) {
      setErrors((prevState) => [
        ...prevState,
        "Podany email jest nieprawidłowy",
      ]);
    } else {
      setErrors((prevState) => [...prevState, true]);
    }
    if (text.length <= 120) {
      setErrors((prevState) => [
        ...prevState,
        "Wiadomość musi mieć conajmniej 120 znaków",
      ]);
    } else {
      setErrors((prevState) => [...prevState, true]);
    }

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("Operation completed!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const data = {
    name: name,
    email: email,
    message: text,
  };

  let messageInfo;
  if (errors[0] == true && errors[1] == true && errors[2] == true) {
    messageInfo = (
      <>
        <p className="hura">Wiadomość została wysłana!</p>
        <p className="hura"> Wkrótce się skontaktujemy</p>
      </>
    );
  } else {
    messageInfo = <p></p>;
  }

  return (
    <div className="container contact-section">
      <div className="row contact">
        <div className="col-6 contact-img"></div>
        <div className="col-6 contact-form ">
          <div>
            <h2>Skontaktuj się z nami</h2>
            <img src={Decoration}></img>
            {messageInfo}
          </div>
          <form id="contact" className="col-12" onSubmit={handleSubmit}>
            <div className="row input-fields">
              <label>
                <p>Wpisz swoje imię:</p>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
                {errors[0] == true ? (
                  <p className="whiteNone">Pomyślnie</p>
                ) : (
                  <p className="warning">{errors[0]}</p>
                )}
              </label>

              <label>
                <p>Wpisz swój email:</p>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors[1] == true ? (
                  <p className="whiteNone">Pomyślnie</p>
                ) : (
                  <p className="warning">{errors[1]}</p>
                )}
              </label>
            </div>

            <div className="text-message">
              <p>Wpisz swoją wiadomość</p>
              <textarea
                rows="5"
                cols="30"
                className="col-7"
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              {errors[2] == true ? (
                <p className="whiteNone">Pomyślnie</p>
              ) : (
                <p className="warning">{errors[2]}</p>
              )}
            </div>

            <div>
              <input className="submit-btn" type="submit" value="Wyślij" />
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <p className="col-4"></p>
        <div className="col-4 footer-copyright">
          <p>Copyright by Coders Lab</p>
        </div>
        <div className="col-4 footer-icons">
          <p>
            <i class="fab fa-facebook-square"></i>
          </p>
          <p>
            <i class="fab fa-instagram"></i>
          </p>
        </div>
      </div>
    </div>
  );
}
