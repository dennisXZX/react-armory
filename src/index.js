import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Airbnb, CovidV1, Facebook, Hulu, Instagram } from "./apps";
import {
  Cards,
  MenuV1,
  MenuV2,
  NavBarV1,
  SkeletonV1,
  TabV1,
  Modal,
} from "./components/";
import { Homepage, Wrapper } from "./homepage";
import "./index.scss";

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

        <Route path="/modal">
          <Wrapper bgColor="#eee">
            <Modal>
              <h1>I'm a Modal rendered in #modal div</h1>
            </Modal>
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
            <TabV1 titles={["Manga", "Book", "Game"]} />
          </Wrapper>
        </Route>

        <Route path="/nav-v1">
          <Wrapper bgColor="#eee" direction="column">
            <NavBarV1
              leftSlot={<div>Left slot content</div>}
              rightSlot={<div>right slot content</div>}
            />
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
