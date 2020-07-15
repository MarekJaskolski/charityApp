import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeHeader from "./HomeHeader";
import HomeInfo from "./HomeInfo";
import AboutUs from "./AboutUs";
import Propagation from "./Pagination";

export default function Home() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <HomeThreeColumns></HomeThreeColumns>
      <HomeInfo></HomeInfo>
      <AboutUs></AboutUs>
      <Propagation></Propagation>
    </>
  );
}
