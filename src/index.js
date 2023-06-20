// * index is the bridge b/w the component in App and browser. ReactDOM talks to the browser.

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

//^ this next section brings the pieces togeher and injects the final product into the index.html file that gets displayed in browser

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);