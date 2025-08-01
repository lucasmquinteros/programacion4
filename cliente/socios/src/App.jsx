import { Router, Route } from "wouter";
import home from "./pages/home";
function App() {
  return (
    <>
      <Router>
        <Route path="/" component={home} />
      </Router>
    </>
  );
}

export default App;
