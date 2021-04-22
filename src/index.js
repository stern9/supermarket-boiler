import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./Components/AppContext.js";
import "./index.css";
import App from "./App";

function AppWrapper() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

ReactDOM.render(<AppWrapper />, document.getElementById("root"));
