import { Route, Router, Link, Switch } from "wouter";
import { Home } from "./pages/home";
import { Plant } from "./pages/plants";
import { NavBar } from "./components/nav-bar";
import { Page404 } from "./pages/page404";
import { PlantDetails } from "./pages/plant-details";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/plants" component={Plant} />
        <Route path="/plants/:id" component={PlantDetails} />

        <Route component={Page404} />
      </Switch>
    </>
  );
}

export default App;
