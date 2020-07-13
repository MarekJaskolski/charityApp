import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeHeader from "./HomeHeader";

export default function Home() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <HomeThreeColumns></HomeThreeColumns>
    </>
  );
}
