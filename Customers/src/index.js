import React from "react";
import ReactDOM from "react-dom/client"; // Update import to react-dom/client
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Create a root using the new API
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app
root.render(
  <Router>
    <Route path="/" component={App} />
  </Router>
);

// Service worker registration
serviceWorker.unregister();
