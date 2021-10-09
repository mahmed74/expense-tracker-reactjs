import React from 'react';
import './App.css';
import { Homepage } from './components/Homepage';
import {TransactionProvider} from "./TransContext";


class App extends React.Component{
  render(){
    return(
      <TransactionProvider>
      <div className="mainDiv">
        <Homepage/>
      </div>
      </TransactionProvider>
    )
  }
}



export default App;
