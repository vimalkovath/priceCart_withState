import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData,setCount } from '../redux'
import './style.css'
import { Container, Button } from './style.js'
import styled, { css } from 'styled-components'

/**
* @author vimalkovath
* @function PriceCart
**/


const PriceCart = (props) => {

    const loading = useSelector(state => state.countries.loading)
    const data = useSelector(state => state.countries.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const calculatePrice = () => {
        return (data.reduce((price, product) => price + (product.price * product.qty), 0)).toFixed(2);
    };

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
                            <span className="tableCell"> </span>
                            <span className="tableCell">Unit Price </span>
                            <span className="tableCell">Total </span>
                            </div>

                            {data.map((item, index) =>
                                <Item {...item} key={index}> </Item>
                            )}
                            
                        </div>

<div className="totalPart">
YOUR CART TOTAL -<span>${calculatePrice()}</span> 
</div>
                   
                    </div>
                    {/* <Button>Normal Button</Button>
                    <Button primary>Primary Button</Button> */}

                </Container>
            </>
        )

}




const Item = (props) => {
    const dispatch = useDispatch();

    const loading = useSelector(state => state.countries.loading)

    const increment = () => {
        dispatch(setCount({"SKU":props.SKU,"qty":props.qty+1}));
    }
    const decrement = () => {
        if (props.qty > 0) {
            dispatch(setCount({"SKU":props.SKU,"qty":props.qty-1}));
        }
    }

    const eachPrice=(a,b)=>{
        return (a*b).toFixed(2)
    }
   

    return loading ? (
        <h2>Loading...</h2>
    ) : (
        <div className="priceRow tableRow" >
            <span className="tableCell">{props.name} </span>
            <span className="tableCell">
                <span className="qtyBtn" onClick={decrement}>-</span>
                <span> - {props.qty} - </span>
                <span className="qtyBtn" onClick={increment}>+</span> </span>
            <span className="tableCell">:</span>
            <span className="tableCell">
                <span>{props.currency}</span> 
                <span>{props.price}</span>
            </span>
            <span className="tableCell">{eachPrice(props.qty,props.price)}</span>
        </div>
    )

}

export default PriceCart