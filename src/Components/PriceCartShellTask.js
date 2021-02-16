import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, setCount, removeItem, clearQty } from '../redux'
import { Container, ButtonChk, Error, Table, Tr, Td,Total,Span } from './style.js'
import Item from './Item'

/**
* @author vimalkovath
* @function PriceCart
**/


const PriceCartShellTask = (props) => {

    const loading = useSelector(state => state.countries.loading)
    const data = useSelector(state => state.countries.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const calculatePrice = () => {
        return (data.reduce((price, product) => price + (product.price * product.qty), 0)).toFixed(2);
    };

    const clearAll = () => {
        dispatch(clearQty())
    }


    return loading ? (
        <h2>Loading...</h2>
    ) : (
            <>
               <Container>


                    <div className="priceTable">
                      
                        <Table>
                            {/* <Tr priceRow>
                                <Td> Name </Td>
                                <Td> Qty </Td>
                                <Td> Unit </Td>
                                <Td> Total </Td>
                                <Td></Td>
                            </Tr> */}

                            

                            {(data.length > 0) ? (
                                data.map((item, index) =>
                                    <Item {...item} key={index}> </Item>
                                )
                            ) : (
                                    <Error >No Items on Cart</Error>
                                )
                            }

                        </Table>

                      
                            <Total>
                            <Span Bold>£{calculatePrice()}</Span>
                            <ButtonChk onClick={clearAll}>Clear</ButtonChk>
                            <ButtonChk primary> {'Check Out >'}  </ButtonChk>
                            </Total>
                       

                    </div>


                </Container>
            </>
        )

}




export default PriceCartShellTask