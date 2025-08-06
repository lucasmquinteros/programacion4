import { Route, Switch } from "wouter";
import NavBar from "./components/nav-bar";
import { Home } from "./pages/home";
import { Partners } from "./pages/partners";
import { Page404 } from "./pages/page404";
import { PartnerDetails } from "./pages/parter-details";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/partners" component={Partners} />
        <Route path="/partners/:id" component={PartnerDetails} />

        <Route component={Page404} />
      </Switch>
    </>
  );
}

export default App;
