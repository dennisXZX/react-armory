import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchResultPage from './components/SearchResultPage/SearchResultPage';

const App = () => {
    // The `path` lets us build <Route> paths that are relative to the parent route
    const { path } = useRouteMatch();

    return (
        <div className={styles.app}>
            <Router>
                <Header />

                <Switch>
                    <Route path={`${path}/search`}>
                        <SearchResultPage />
                    </Route>

                    <Route path={`${path}/`}>
                        <Homepage />
                    </Route>
                </Switch>

                <Footer />
            </Router>
        </div>
    );
};

export default App;
