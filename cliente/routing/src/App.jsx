import { Router, Route } from "wouter";
import Home from "./pages/home";
function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </>
  );
}

export default App;
