import React, { useState } from "react";
import NavBar from "./NavBar";
import Decoration from "../assets/Decoration.svg";
import FakeAPI from "../data/fakeAPI";

export default function Login() {
  let api = FakeAPI;
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loggedIn, setLoggedIn] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (login.indexOf("@") === -1 || login.length === 0) {
      setErrors((prevState) => [
        ...prevState,
        "podany email jest nieprawidłowy",
      ]);
    } else {
      setErrors((prevState) => [...prevState, true]);
    }
    if (password.length <= 4) {
      setErrors((prevState) => [...prevState, "podane hasło jest za krótkie"]);
    } else {
      setErrors((prevState) => [...prevState, true]);

      api
        .login({
          username: login,
          password: password,
        })
        .then((response) => {
          setLoggedIn(response);
          console.log(response);
        })
        .catch((err) => {
          setErrors((prevState) => [...prevState, err]);
        });
    }
  };

  if (loggedIn == null) {
    return (
      <div className="container">
        <div className="row header registration">
          <div className="col-12">
            <NavBar></NavBar>
          </div>
          <div className="registration-box">
            <h1>Zaloguj się</h1>
            <img src={Decoration}></img>
            <form onSubmit={handleSubmit}>
              <div className="registration-box-small">
                <label>Email</label>
                <input
                  type="text"
                  name="login"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
                {errors[0] == true ? (
                  <p className="whiteNone"></p>
                ) : (
                  <p className="warning">{errors[0]}</p>
                )}
                <label>Hasło</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors[1] == true ? (
                  <p className="whiteNone"></p>
                ) : (
                  <p className="warning">{errors[1]}</p>
                )}
                {errors[2] === "Hasło lub login są nieprawidłowe!" ? (
                  <p className="warning">{errors[2]}</p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="row registration-bottom">
                <input type="submit" value="Załóż konto" />
                <input type="submit" value="Zaloguj!" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Witaj {loggedIn.username}</h1>
      </div>
    );
  }
}
