import { Route, Switch } from "wouter";
import ListOfCharacters from "./pages/characters/list-of-characters";
import Home from "./pages/home";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/characters">
          <ListOfCharacters />
        </Route>
        <Route path="/characters/:id">
          <ListOfCharacters />
        </Route>
      </Switch>
    </>
  );
}

export default App;
