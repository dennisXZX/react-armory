import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Airbnb from "./apps/airbnb";
import CovidV1 from "./apps/covid-v1";
import Facebook from "./apps/facebook";
import Hulu from "./apps/hulu";
import Instagram from "./apps/instagram-reels";
import Cards from "./components/card-v1/Cards";
import MenuV1 from "./components/menu-v1/MenuV1";
import MenuV2 from "./components/menu-v2/MenuV2";
import SkeletonV1 from "./components/skeleton-v1/SkeletonV1";
import Wrapper from "./homepage/components/Wrapper/Wrapper";
import Homepage from "./homepage/Homepage";
import "./index.module.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* Apps */}
        <Route path="/instagram">
          <Instagram />
        </Route>

        <Route path="/facebook">
          <Facebook />
        </Route>

        <Route path="/airbnb">
          <Airbnb />
        </Route>

        <Route path="/hulu">
          <Hulu />
        </Route>

        <Route path="/covid-v1">
          <CovidV1 />
        </Route>

        {/* Components */}
        <Route path="/card-v1">
          <Wrapper bgColor="#17141d">
            <Cards />
          </Wrapper>
        </Route>

        <Route path="/menu-v1">
          <Wrapper bgColor="#080b1f">
            <MenuV1 />
          </Wrapper>
        </Route>

        <Route path="/menu-v2">
          <Wrapper bgColor="#080b1f">
            <MenuV2 />
          </Wrapper>
        </Route>

        <Route path="/skeleton-v1">
          <Wrapper bgColor="#eee" direction="column">
            <SkeletonV1 circle={true} />
            <SkeletonV1 />
            <SkeletonV1 />
            <SkeletonV1 />
          </Wrapper>
        </Route>

        {/* Default route */}
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
