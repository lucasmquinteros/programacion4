import { Route, Switch } from "wouter";
import NavBar from "./components/nav-bar";
//import CharacterDetail from "./pages/characters/character-detail";
//import ListOfCharacters from "./pages/characters/list-of-characters";
//import Home from "./pages/home";
//import ListOfPlanets from "./pages/planets/list-of-planets";
//import PlanetDetail from "./pages/planets/planet-detail";
import { Suspense, lazy } from "react";
import Spinner from "./components/spinner";
//para usar lazy loading, se debe exportar el componente por defecto/default (manera simple)
const HomePage = lazy(() => import("./pages/home"));
const ListOfPlanetsPage = lazy(() => import("./pages/planets/list-of-planets"));
const ListOfCharactersPage = lazy(() =>
  import("./pages/characters/list-of-characters")
);
const CharacterDetailPage = lazy(() =>
  import("./pages/characters/character-detail")
);
const PlanetDetailPage = lazy(() => import("./pages/planets/planet-detail"));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/characters">
            <ListOfCharactersPage />
          </Route>
          <Route path="/characters/:id">
            <CharacterDetailPage />
          </Route>
          <Route path="/planets">
            <ListOfPlanetsPage />
          </Route>
          <Route path="/planets/:id">
            <PlanetDetailPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
