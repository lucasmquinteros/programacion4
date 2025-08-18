import { Route, Switch } from "wouter";
import NavBar from "./components/nav-bar";
import Home from "./pages/home";
import Page404 from "./pages/page404";
import PlantDetail from "./pages/plant-detail";
import Plants from "./pages/plants";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/plants" component={Plants} />
        <Route path="/plants/:id" component={PlantDetail} />

        <Route component={Page404} />
      </Switch>
    </>
  );
}

export default App;
