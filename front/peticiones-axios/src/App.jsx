import { Route, Switch } from "wouter";
import { Characters } from "./pages/characters/characters";
import { Page404 } from "./pages/page404";
import DetailCharacter from "./pages/characters/detail-character";
import Home from "./pages/home";
import NavBar from "./components/nav-bar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path={"/"}>
          <Home />
        </Route>
        <Route path={"/characters"}>
          <Characters />
        </Route>
        <Route path={"/characters/:id"}>
          <DetailCharacter />
        </Route>

        <Route>
          <Page404 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
