import { useState } from "react";
import Container from "./UI_Kit/Container.js";
import Button from "./UI_Kit/Button.js";
import StoreFront from "./Components/StoreFront";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Container className="app">
        <StoreFront>
          if (loggedIn)
          {
            <Button
              className="btn btn-outline"
              onClick={() => setLoggedIn(false)}
            >
              Logout
            </Button>
          }
          else{" "}
          {
            <>
              <h2>Please login</h2>
              <Button
                className="btn btn-primary"
                onClick={() => setLoggedIn(true)}
              >
                Login
              </Button>
            </>
          }
        </StoreFront>
      </Container>
    </>
  );
}

export default App;
