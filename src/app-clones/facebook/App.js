import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Login from './components/Login/Login';
import { useStateValue } from './store/StateProvider';

const App = () => {
    const [{ user }] = useStateValue();

    return (
        <div className={styles.app}>
            {!user ? (
                <Login />
            ) : (
                <>
                    <Header />

                    <div className={styles.app__body}>
                        <Sidebar />
                        <Feed />
                        <Widgets />
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
