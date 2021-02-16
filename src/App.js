import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import './App.css';
import axios from "axios";

import { Provider } from 'react-redux'
import store from './redux/store'
import PriceCart from './Components/PriceCart';

import PriceCartShell from './Components/PriceCartShell';


function App() {


  const [list, setList] = useState([]);

  const content = useSelector(state => state); //this hook gives us redux store state
  const dispatch = useDispatch(); //this hook gives us dispatch method

//async action
  function getData() {
    return dispatch => {
      dispatch({
        type: "FETCH_DATA",
        data: []
      })

      // axios.get("https://jsonplaceholder.typicode.com/todos/1")
      // .then(res =>
      //   dispatch({
      //     type: "FETCH_DATA",
      //     data: res.data
      //   })
      // );

    };
  }


  useEffect(() => {
    dispatch(getData());
  }, []);



  return (
    <div className="App">
     
     <Provider store={store}>
      {/* <PriceCart/> */}
      <PriceCartShell/>
    </Provider>
    
    </div>
  );
}

export default App;
