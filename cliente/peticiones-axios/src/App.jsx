import { useEffect, useState } from "react";
import { getAllCharacters } from "./services/dragon-ball-api/characters";
import CardCharacter from "./components/characters/card-character";
import ListOfCharacters from "./components/characters/list-of-characters";
import { Route, Switch } from "wouter";
import Home from "./components/pages/home";
import CharacterDetail from "./components/pages/characters/character-detail";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path={"/"}>
          <Home />
        </Route>

        <Route path={"/characters"}>
          <ListOfCharacters />
        </Route>
        <Route path={"/characters:id"}>
          <CharacterDetail />
        </Route>
      </Switch>
    </>
  );
}

export default App;
