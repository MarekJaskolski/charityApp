import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Decoration from "../assets/Decoration.svg";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";

export default function HomeInfo() {
  return (
    <div className="container">
      <div id="info-section" className="row col-12 step-box">
        <h1>Wystarczą 4 proste kroki</h1>
        <img src={Decoration}></img>
        <div className=" col-12 row step-columns">
          <div className="col-2 what-to-do">
            <img src={Icon1}></img>
            <p>Wybierz rzeczy</p>
            <div></div>
            <p>ubrania,zabawki, sprzęt i inne</p>
          </div>
          <div className="col-2 what-to-do">
            <img src={Icon2}></img>
            <p>Spakuj je</p>
            <div></div>
            <p>skorzystaj z worków na śmieci</p>
          </div>
          <div className="col-2 what-to-do">
            <img src={Icon3}></img>
            <p>Zdecyduj komu chcesz pomóc</p>
            <div></div>
            <p>wybierz zaufane miejsce</p>
          </div>
          <div className="col-2 what-to-do">
            <img src={Icon4}></img>
            <p>Wybierz kuriera</p>
            <div></div>
            <p>kurier przyjedzie w dogodnym terminie</p>
          </div>
        </div>
        <Link to="/login">
          <button className="col-2 btn ">ODDAJ RZECZY</button>
        </Link>
      </div>
    </div>
  );
}
