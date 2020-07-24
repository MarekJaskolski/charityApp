import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import HomeThreeColumns from "./HomeThreeColumns";
import { Link as LinkScroll } from "react-scroll";
import Decoration from "../assets/Decoration.svg";
import NavBar from "./NavBar";

export default function HomeHeder() {
  return (
    <>
      <div className="container">
        <div className="row header">
          <div className="col-6 header-picture"></div>

          <div className="col-6">
            <NavBar></NavBar>

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
    </>
  );
}
