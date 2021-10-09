import React, { useContext } from 'react';
import "../App.css";
import {TransactionContext} from "../TransContext";
// import {addTransaction} from "../TransContext"
import TransactionProvider from "../TransContext"


export const HistoryAmount = () => {


        let {transaction,deleteTransaction} = useContext(TransactionContext)
        

    

    return (
        <div>
            <div className="History">
                        <h2>History</h2>
                        <hr/>
                    
                        <ul className="transaction_list">

                            {transaction.map((TransactionsObj,index)=>{
                                
                                return(
                                    <li key ={TransactionsObj.id} className={TransactionsObj.amount<0 ? "minus": "plus"}>
                                <span>{TransactionsObj.title}</span>
                                <span>${TransactionsObj.amount}</span>
                                <button onClick={() => deleteTransaction(TransactionsObj.id)} className="delete-btn">x</button>
                            </li>
                                )
                            })}


                            {/* <li>
                                <span>Amount $400</span>
                                <span>Bills</span>
                            </li>
                            <li>
                                <span>Amount $400</span>
                                <span>Bills</span>
                            </li> */}



                        </ul>
                    </div>
        </div>
    )
}
