import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/registration" component={Registration}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
