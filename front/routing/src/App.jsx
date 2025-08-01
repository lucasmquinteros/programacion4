import { Switch, Route } from "wouter";
import Home from "./pages/home";
import Plants from "./pages/plants";
import NavBar from "./components/nav-bar";
import Page404 from "./pages/page404";
import PlantDetail from "./pages/plant-detail";

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
