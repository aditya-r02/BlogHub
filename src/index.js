import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextCreator from "./Contexts/AppContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppContextCreator>
      <App />
    </AppContextCreator>
  </BrowserRouter>

);
