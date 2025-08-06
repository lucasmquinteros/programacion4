import { useState } from "react";
import Cursor from "./cursor";

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <main className=" flex justify-center items-center h-screen w-full">
      <section>
        <button
          onClick={() => setEnabled(true)}
          type="button"
          className="z-[3] cursor-pointer text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Prender
        </button>
        <button
          onClick={() => setEnabled(false)}
          type="button"
          className="z-[3] cursor-pointer text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Apagar
        </button>
      </section>
      {enabled && <Cursor />}
    </main>
  );
}

export default App;
