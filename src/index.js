import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dogs from "../src/model/Dogs";

import HomePage from "../src/pages/HomePage";
import DogPage from "../src/pages/DogPage";
import ThanksPage from "../src/pages/ThanksPage";

import "./styles.css";

function App() {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={props => <HomePage {...props} items={Dogs} />}
      />
      <Route path="/dog/:id" component={DogPage} />
      <Route path="/thanks/:id" component={ThanksPage} />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
