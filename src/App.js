import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <HashRouter>
      <>
        <Route exact path="/" component={Home}></Route>
      </>
    </HashRouter>
  );
}

export default App;
