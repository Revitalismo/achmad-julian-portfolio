import { useState } from "react";
import { currentTheme } from "./components/Context.mjs";
import { sidebarOn } from "./components/Context.mjs";

import Navbar from "./components/navbar/Navbar";
import RouteLayout from "./components/navbar/RouteLayout";
import Copyright from "./components/Copyright";

function App() {
  const [theme, setTheme] = useState("light");
  const [sidebar, setSidebar] = useState("close");

  return (
    <currentTheme.Provider value={[theme, setTheme]}>
      
      <sidebarOn.Provider value={[sidebar, setSidebar]}>

        <div className={`app-${theme}`}>
          <main className="App">
            <Navbar />
            <RouteLayout />
            <Copyright />
          </main>
        </div>
      </sidebarOn.Provider>
    </currentTheme.Provider>
  )
}

export default App
