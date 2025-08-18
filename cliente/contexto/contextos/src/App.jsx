import BisAbuelo from "./components/bis-abuelo";
import CountProvider from "./context/count-provider";

function App() {
  return (
    <>
      <CountProvider>
        <BisAbuelo />
      </CountProvider>
    </>
  );
}

export default App;
