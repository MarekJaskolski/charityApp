import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import HomeThreeColumns from "./HomeThreeColumns";
import { Link as LinkScroll } from "react-scroll";
import Decoration from "../assets/Decoration.svg";

export default function HomeHeder() {
  return (
    <>
      <div className="container">
        <div className="row header">
          <div className="col-6 header-picture"></div>
          <div className="col-6">
            <div className="row header-section">
              <div className="row login">
                <p>
                  <Link to="/login" className="link">
                    Zaloguj
                  </Link>
                </p>
                <Link to="/registration" className="link">
                  <p>Załóż konto</p>
                </Link>
              </div>
              <nav>
                <ul className="row">
                  <li>Start</li>
                  <LinkScroll to="info-section" smooth={true} duration={1000}>
                    {" "}
                    <li>O co chodzi?</li>
                  </LinkScroll>
                  <LinkScroll to="about-us" smooth={true} duration={1500}>
                    <li>O nas</li>
                  </LinkScroll>
                  <li>Fundacja i organizacje</li>
                  <li>Kontakt</li>
                </ul>
              </nav>
              <div className="row main-header">
                <p>Zacznij pomagać!</p>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                <img src={Decoration}></img>
              </div>
              <div className="row buttons-header">
                <Link to="/login">
                  {" "}
                  <button>Oddaj Rzeczy</button>
                </Link>
                <Link to="/login">
                  <button> Zorganizuj Zbiórkę</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
