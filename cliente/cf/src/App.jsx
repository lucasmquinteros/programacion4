import Cursor from "./cursor";
import { useState } from "react";
function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <main className="flex justify-center items-center h-screen w-full bg-[#ccc]">
      <section>
        <button
          onClick={() => setEnabled(true)}
          type="button"
          className="z-10 cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Prender
          </span>
        </button>
        <button
          onClick={() => setEnabled(false)}
          type="name"
          className="z-10 cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Apagar
          </span>
        </button>
      </section>
      {enabled ? <Cursor /> : null}
    </main>
  );
}

export default App;
