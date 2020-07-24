import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Decoration from "../assets/Decoration.svg";

export default function Registration() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    if (login.indexOf("@") === -1 || login.length === 0) {
      setErrors((prevState) => [
        ...prevState,
        "podany email jest nieprawidłowy",
      ]);
    } else {
      setErrors((prevState) => [...prevState, true]);
    }
  }, [login]);

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

    if (password.length < 6 || password !== secondPassword) {
      setErrors((prevState) => [
        ...prevState,
        "podane hasła są za krótkie lub nie są te same",
      ]);
    } else {
      setErrors((prevState) => [...prevState, true]);
    }
  };

  const handleSave = (e) => {
    const newUser = {
      login: login,
      password: password,
    };
    if (errors[0] == true && errors[1] == true) {
      fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "content-type": "Application/JSON",
        },
      }).then((resp) => {
        console.log(resp);
        return resp.json();
      });
    }
  };

  return (
    <div className="container">
      <div className="row header registration">
        <div className="col-12">
          <NavBar></NavBar>
        </div>
        <div className="registration-box">
          <h1>Załóż konto</h1>
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

              <label>Powtórz hasło</label>
              <input
                type="password"
                name="password"
                value={secondPassword}
                onChange={(e) => setSecondPassword(e.target.value)}
              />
              {errors[1] == true ? (
                <p className="whiteNone"></p>
              ) : (
                <p className="warning">{errors[1]}</p>
              )}
            </div>
            <div className="row registration-bottom">
              <input type="submit" value="Załóż konto" onClick={handleSave} />
              <input type="submit" value="Zaloguj!" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
