import React from "react";
import "./App.css";
import MainInfo from "./components/MainInfo/MainInfo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import PricesPage from "./pages/PricesPage/PricesPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={FrontPage} exact/>
        <Route path="/cennik" component={PricesPage} exact/>
        <Route path="/aboutus" component={AboutUsPage} exact/>
        <Route path="/contact" component={ContactPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
