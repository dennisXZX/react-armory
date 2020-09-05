import React, { createContext, useContext, useReducer } from 'react'

// Create app state context
export const StateContext = createContext(null);

// Helper function to wrap your app with context
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Helper function to read state
export const useStateValue = () => useContext(StateContext);
