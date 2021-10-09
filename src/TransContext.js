import React, { createContext, useReducer } from "react";
import TransactionReducer from './TransReducer';

let initialTransactions = [
    // { amount: 500, title: "Cash", id: 3 },
    // { amount: -200, title: "Book", id: 4 },
    // { amount: -5, title: "Camera", id: 5 },
]

export const TransactionContext = createContext(initialTransactions);


export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)


    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(TransactionsObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: TransactionsObj.amount,
                title: TransactionsObj.title,
                id: TransactionsObj.id,
            }
        })
    }

    return ( <
        TransactionContext.Provider value = {
            {
                transaction: state,
                addTransaction: addTransaction,
                deleteTransaction,
            }
        } > { children } <
        /TransactionContext.Provider>
    )

}