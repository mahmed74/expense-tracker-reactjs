import React ,{useContext} from 'react';
import "../App.css";
import { AddTransaction } from './AddTransaction';
import { Header } from './Header';
import { HistoryAmount } from './HistoryAmount';
import {TransactionContext} from "../TransContext";

export const Homepage = () => {


    const { transaction} = useContext(TransactionContext);




    const getIncome = () =>{
        let income = 0 ;
        transaction.map((value,index)=>{
            console.log("value.amount ===>",value.amount , typeof(value.amount))
            if(value.amount > 0){
                 income += value.amount 
            }
            console.log("income ==>",income)
            
        
        })
        return income;
    }
    

    const getexpense = () => {
        let expense = 0;
        transaction.map((value,index)=>{
            if(value.amount < 0){
             expense += value.amount
            }
        })
        
        return expense
        
    }
    
    
    


    return (
        <div>
            <div className="mainDivApp">
                <div className="row text-center">
                    <div className="col-md-12">
                  
                    <Header/>
                   
                    </div>
                </div>
            <div className="row">
                <div className="col-md-6 amountDiv">
                    <h2>Amount : ${getIncome() + getexpense()}</h2>
                    <div className="incomeExpenses">
                        <div className="row">
                            <div className="col-md-6 col-6 col-sm-6 incomeSpan"><span ><h4>Income</h4>
    <h4>${getIncome()}</h4></span>
                        </div>
                            <div className="col-md-6 col-6 col-sm-6 expenseSpan"><span><h4>Expenses</h4>
    <h4>${getexpense()}</h4></span></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <AddTransaction/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <HistoryAmount/>

                </div>
            </div>
            </div>
        </div>
    )
}
