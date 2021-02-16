import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import './App.css';
import axios from "axios";

import { Provider } from 'react-redux'
import store from './redux/store'
import PriceCart from './Components/PriceCart';

import PriceCartShell from './Components/PriceCartShell';
import PriceCartShellTask from './Components/PriceCartShellTask';


function App() {




  return (
    <div className="App">
     
     <Provider store={store}>
      {/* <PriceCart/> */}
      {/* <PriceCartShell/> */}
      <PriceCartShellTask/>
    </Provider>
    
    </div>
  );
}

export default App;
