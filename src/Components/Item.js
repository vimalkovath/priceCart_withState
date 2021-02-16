import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  setCount,removeItem } from '../redux'
import {Tr, Td } from './style.js'
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
                <Tr priceRow>
                    <Td> {props.name} </Td>
                    <Td>
                    <span>  <input type="number" min="0" value={qty} onChange={e=>onChange(e.target.value)}/>  </span>
                    </Td>
                    <Td> {props.price} </Td>
                    <Td Indtotal><span>{props.currency}</span>{eachPrice(qty, props.price)}</Td>
                    <Td close onClick={deleteItem}>x</Td>
                </Tr>
               
        )

}

export default Item