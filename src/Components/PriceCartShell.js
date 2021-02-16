import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, setCount,removeItem,clearQty } from '../redux'
import './style.css'
import { Container, Button,Error } from './style.js'
import styled, { css } from 'styled-components'

/**
* @author vimalkovath
* @function PriceCart
**/


const PriceCartShell = (props) => {

    const loading = useSelector(state => state.countries.loading)
    const data = useSelector(state => state.countries.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const calculatePrice = () => {
        return (data.reduce((price, product) => price + (product.price * product.qty), 0)).toFixed(2);
    };

    const clearAll =()=>{
        dispatch(clearQty())
    }
    

    return loading ? (
        <h2>Loading...</h2>
    ) : (
            <>
                <h2>Cart</h2>

                <Container>

                    <div className="priceTable">
                        <div className="table">

                            <div className="priceRow tableRow fb">
                                <span className="tableCell">Name </span>
                                <span className="tableCell">Qty </span>
                                <span className="tableCell">unit </span>
                                <span className="tableCell">Total </span>
                                <span className="tableCell"> </span>
                            </div>

                            {(data.length>0)?(
                                data.map((item, index) =>
                                <Item {...item} key={index}> </Item>
                                    )
                            ):(
                                <Error >No Items on Cart</Error>
                               
                            )
                            }

                        </div>

                        <div className="totalPart">
                           <span>£{calculatePrice()}</span>
                           <span onClick={clearAll}>Clear</span>
                           <span className="chkBtn">Checkout</span>
                        </div>

                    </div>
                   

                </Container>
            </>
        )

}




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

export default PriceCartShell