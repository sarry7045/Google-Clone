import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { StateContextProvider } from "./Contexts/ResultContextProvider.jsx";
import "./Global.css";

ReactDom.render(
  <StateContextProvider>
    <Router>
      <App />
    </Router>
  </StateContextProvider>,
  document.getElementById("root")
);
