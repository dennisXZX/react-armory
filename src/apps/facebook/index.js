import React from 'react';
import App from './App';
import { StateProvider } from './store/StateProvider';
import { initialState } from './store/reducer';
import reducer from './store/reducer';

const Facebook = () => {
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <App/>
        </StateProvider>
    );
};

export default Facebook;
