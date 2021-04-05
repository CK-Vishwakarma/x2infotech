import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Login from "./Login";
import Registration from "./Registration";
import Career from "./Career";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/services" component={Services} />
        <Route path="/career" component={Career} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Main;
