import { Route, Switch } from "wouter";
import home from "./pages/home";
import Navbar from "./components/navbar";
import Socios from "./pages/socios";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={home} />
        <Route path="/socios" component={Socios} />
      </Switch>
    </>
  );
}

export default App;
