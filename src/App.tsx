import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { FrontPage, PricesPage, AboutUsPage, ContactPage } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={FrontPage} exact />
        <Route path="/cennik" component={PricesPage} exact />
        <Route path="/aboutus" component={AboutUsPage} exact />
        <Route path="/contact" component={ContactPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
