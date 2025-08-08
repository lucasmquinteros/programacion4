import { Route, Switch } from "wouter";
import NavBar from "./components/nav-bar";
import { lazy, Suspense } from "react";
import Spinner from "./components/spinner";

// puedo importar un lazy se puede hacer si un componenete esta importado de manera default o no (manera simple)
// se puede importar si es nombrado pero con un parametro default:
const HomePage = lazy(() => import("./pages/home"));
const Page404Page = lazy(() => import("./pages/page404"));
const CharactersPage = lazy(() => import("./pages/characters/characters"));
const DetailCharacterPage = lazy(() =>
  import("./pages/characters/detail-character")
);
const PlanetsPage = lazy(() => import("./pages/planets/planets"));
const DetailPlanetPage = lazy(() => import("./pages/planets/detail-planet"));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={"/"}>
            <HomePage />
          </Route>
          <Route path={"/characters"}>
            <CharactersPage />
          </Route>
          <Route path={"/characters/:id"}>
            <DetailCharacterPage />
          </Route>
          <Route path={"/planets"}>
            <PlanetsPage />
          </Route>
          <Route path={"/planets/:id"}>
            <DetailPlanetPage />
          </Route>

          <Route>
            <Page404Page />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
