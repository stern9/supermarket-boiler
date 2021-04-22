import React, { useContext } from "react";
import StoreFront from "./Components/StoreFront.js";
import Navbar from "./Components/Navbar.js";
import { AppContext } from "./Components/AppContext.js";

function App() {
  const app = useContext(AppContext);

  return (
    <div className={app.theme === "dark" ? "dark" : ""}>
      <Navbar />
      <StoreFront />
    </div>
  );
}

export default App;
