import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Airbnb, CovidV1, Facebook, Hulu, Instagram } from "./apps";
import { Cards, MenuV1, MenuV2, SkeletonV1, TabV1 } from "./components/";
import { Homepage, Wrapper } from "./homepage";
import "./index.module.scss";

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

        <Route path="/tab-v1">
          <Wrapper bgColor="#eee" direction="column">
            <TabV1 titles={['Manga', 'Book', 'Game']} />
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
