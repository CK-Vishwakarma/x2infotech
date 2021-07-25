import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Login from "./Login";
import Registration from "./Registration";
import Career from "./Career";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import WebsiteDesign from "./servicesPage/WebsiteDesign";
import MobileApplication from "./servicesPage/MobileApplication";
import CMS from "./servicesPage/CMS";
import SystemMaintenance from "./servicesPage/SystemMaintenance";
import SEO from "./servicesPage/SEO";
import Advertising from "./servicesPage/Advertising";
import BrochureDesign from "./servicesPage/BrochureDesign";
import LogoDesign from "./servicesPage/LogoDesign";
import VideoEditing from "./servicesPage/VideoEditing";
const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/services/website-design" component={WebsiteDesign} />
        <Route
          path="/services/mobile-application"
          component={MobileApplication}
        />
        <Route path="/services/CMS" component={CMS} />
        <Route
          path="/services/system-maintenance"
          component={SystemMaintenance}
        />
        <Route path="/services/SEO" component={SEO} />
        <Route path="/services/advertising" component={Advertising} />
        <Route path="/services/brochure-design" component={BrochureDesign} />
        <Route path="/services/logo-design" component={LogoDesign} />
        <Route path="/services/video-editing" component={VideoEditing} />
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
