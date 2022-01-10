import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// Initial State

const initialState = {
    transactions: [
        { id: 1, text: 'Income', amount: 1000},
        { id: 2, text: 'Chips', amount: -500},

    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispath] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispath({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispath({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction, 
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}