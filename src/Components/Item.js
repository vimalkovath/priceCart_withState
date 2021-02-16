import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  setCount,removeItem } from '../redux'
import './style.css'
/**
* @author vimalkovath
* @function Item
**/


 const Item = (props) => {

    const dispatch = useDispatch();
    const [qty,setQty]=useState(props.qty);


    const loading = useSelector(state => state.countries.loading)
    const data = useSelector(state => state.countries.data)


    useEffect(()=>{
        setQty(props.qty)
    },[data])


   
    const onChange = (val) => {
        dispatch(setCount({ "SKU": props.SKU, "qty": val }));
        setQty(val);
    }

    const deleteItem=()=>{
        dispatch(removeItem({ "SKU": props.SKU }));
    }

    const eachPrice = (a, b) => {
        return (a * b).toFixed(2)
    }


    return loading ? (
        <h2>Loading...</h2>
    ) : (
            <div className="priceRow tableRow" >
                <span className="tableCell">{props.name} </span>
                <span className="tableCell">
                    <span>  <input type="number" min="0" value={qty} onChange={e=>onChange(e.target.value)}/>  </span>
                </span>
                <span className="tableCell">{props.price} </span>
                <span className="tableCell Indtotal"><span>{props.currency}</span>{eachPrice(qty, props.price)}</span>
                <span className="tableCell close" onClick={deleteItem}>x</span>
            </div>
        )

}

export default Item