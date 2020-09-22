import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Facebook from './app-clones/facebook';
import Airbnb from './app-clones/airbnb';
import Homepage from './homepage/Homepage';
import Hulu from './app-clones/hulu';
import Instagram from './app-clones/instagram-reels';
import MenuV1 from './component-gallery/menu-v1/MenuV1';
import Wrapper from './homepage/components/Wrapper/Wrapper';
import Cards from './component-gallery/card-v1/Cards';
import CovidV1 from './app-clones/covid-v1';
import MenuV2 from './component-gallery/menu-v2/MenuV2';
import SkeletonV1 from './component-gallery/skeleton-v1/SkeletonV1';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                {/* App Clones */}
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
                    <Wrapper bgColor="#17141d"><Cards /></Wrapper>
                </Route>

                <Route path="/menu-v1">
                    <Wrapper bgColor="#080b1f"><MenuV1 /></Wrapper>
                </Route>

                <Route path="/menu-v2">
                    <Wrapper bgColor="#080b1f"><MenuV2 /></Wrapper>
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
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
