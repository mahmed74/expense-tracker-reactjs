import transitions from '@material-ui/core/styles/transitions';
import React, { useState ,useContext} from 'react';
import '../App.css';
import {TransactionContext} from "../TransContext"



export const AddTransaction = () => {

    let [newtitle , settitle] = useState("");
    let [newamount , setamount] = useState(0);

    const { addTransaction } = useContext(TransactionContext);
     
let handleAddition = (e)=>{
    e.preventDefault()
    addTransaction({
        amount: +newamount,
        title: newtitle,
        id: Math.floor(Math.random() * 100000000),
    })
    
    
}



  
    return (
        <div className="AddTransactionclass">
            <form  className="Transaction-form" onSubmit={handleAddition}  >
            <h4>Add New Transaction</h4>
            <hr/>
            <h5>Enter Title</h5>
            <label >
            <input type="text" placeholder="Enter Title" onChange={(e)=>{settitle(e.target.value)}}  required/>
            </label>
            <h5>Amount</h5>
            <p>(negative - Expense and Positive - Income)</p>
            <label >
            <input type="text" placeholder="Add Income/Expense" onChange={(e)=>{setamount(e.target.value)}}   required />
            </label>
            <p></p>
            {/* <input type="submit" name="" id="" className="submitBtn" value="ADD Transaction"/> */}
            <button type="submit" >ADD Transaction</button>
            </form>
        </div>
    )


}
