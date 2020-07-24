import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import HomeThreeColumns from "./HomeThreeColumns";
import { Link as LinkScroll } from "react-scroll";
import Decoration from "../assets/Decoration.svg";

export default function NavBar() {
  return (
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
          <Link to="/" className="link">
            <li>Start</li>
          </Link>
          <LinkScroll to="info-section" smooth={true} duration={1000}>
            {" "}
            <li>O co chodzi?</li>
          </LinkScroll>
          <LinkScroll to="about-us" smooth={true} duration={1500}>
            <li>O nas</li>
          </LinkScroll>
          <LinkScroll to="organizations" smooth={true} duration={2000}>
            <li>Fundacja i organizacje</li>
          </LinkScroll>
          <LinkScroll to="organizations" smooth={true} duration={2500}>
            <li>Kontakt</li>
          </LinkScroll>
        </ul>
      </nav>
    </div>
  );
}
