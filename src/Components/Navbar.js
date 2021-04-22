import React, { useContext } from "react";
import { AppContext } from "./AppContext.js";

const Navbar = () => {
  const app = useContext(AppContext);

  function handleCurrencyChange(event) {
    app.setCurrency(event.target.value);
  }

  return (
    <>
      Shopping in{" "}
      <select onChange={handleCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      - Using {app.theme} theme{" "}
      <button onClick={app.toggleTheme}>Toggle theme</button>
      <hr />
    </>
  );
};

export default Navbar;
