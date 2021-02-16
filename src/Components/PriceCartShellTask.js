import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, setCount, removeItem, clearQty } from '../redux'
import { Container, ButtonChk, Error, Table, Tr, Td, Total, Span } from './style.js'
import Item from './Item'
import Modal from "react-modal";
Modal.setAppElement("#root");

/**
* @author vimalkovath
* @function PriceCart
**/


const PriceCartShellTask = (props) => {

    const loading = useSelector(state => state.countries.loading)
    const data = useSelector(state => state.countries.data)
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const reLoad = () => {
        dispatch(fetchData())
    }

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

                    <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModal}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                    >
                        <Container>
                            <div><b>{calculatePrice()} </b> <i>Amount Will be deducting from you</i> </div>
                            <br></br>
                            <ButtonChk primary onClick={toggleModal}> Click ok To Confirm </ButtonChk>
                        </Container>
                    </Modal>

                    <div className="priceTable">

                        <Table>
                            {(data.length > 0) ? (
                                data.map((item, index) =>
                                    <Item {...item} key={index}> </Item>
                                )
                            ) : (
                                    <Error >There are no items in the basket</Error>
                                )
                            }

                        </Table>

                        {(data.length > 0) ? (
                            <Total>

                                <Span Bold>£{calculatePrice()}</Span>
                                <ButtonChk onClick={clearAll}>Clear</ButtonChk>
                                <ButtonChk primary onClick={toggleModal}> {'Check Out >'}  </ButtonChk>

                            </Total>
                        ) : (<> <span onClick={reLoad}>Load </span></>)
                        }


                    </div>


                </Container>
            </>
        )

}




export default PriceCartShellTask