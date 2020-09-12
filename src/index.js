import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Facebook from './app-clones/facebook';
import Airbnb from './app-clones/airbnb';
import Homepage from './app-clones/homepage/Homepage';
import Hulu from './app-clones/hulu';
import Instagram from './app-clones/instagram-reels';
import Card from './component-gallery/card-v1/Card';
import Menu from './component-gallery/menu-v1/Menu';
import Wrapper from './app-clones/homepage/components/Wrapper/Wrapper';

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

                {/* Components */}
                <Route path="/card-v1">
                    <Wrapper><Card /></Wrapper>
                </Route>
                <Route path="/menu-v1">
                    <Wrapper><Menu /></Wrapper>
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
