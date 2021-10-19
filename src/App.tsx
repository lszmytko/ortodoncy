import React from "react";
import "./App.css";
import MainInfo from "./components/MainInfo/MainInfo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import PricesPage from "./pages/PricesPage/PricesPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={FrontPage} exact/>
        <Route path="/cennik" component={PricesPage} exact/>
        {/* <Route path="/" component={FrontPage} exact/>
        <Route path="/" component={FrontPage} exact/>
        <Route path="/" component={FrontPage} exact/>
        <Route path="*" component={FrontPage} exact/> */}
      </Switch>
    </Router>
  );
}

export default App;
