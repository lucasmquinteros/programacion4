import { useState } from "react";
import NavBar from "./components/nav-bar";
import "./App.css";
import { Route, Switch } from "wouter";
import Home from "./pages/home";
import Page404 from "./pages/page404";
import Socios from "./pages/socios";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/socios" component={Socios} />

        <Route component={Page404} />
      </Switch>
    </>
  );
}

export default App;
