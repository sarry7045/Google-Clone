import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Global.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./Contexts/ResultContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ResultContextProvider>
      <Router>
        {" "}
        <App />
      </Router>
    </ResultContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
