import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './CartProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { removeFromDb } from '../../../utilities/localStorage';

const CartProduct = ({product, removeCartItem}) => {
    const {price, quantity, img, name, key} = product;
    const [newQuantity, setNewQuantity] = useState({quantity : quantity})
    const total = price * quantity;
    const minus = <FontAwesomeIcon icon={ faMinus } />;
    const plus = <FontAwesomeIcon icon={ faPlus } />
    const handleMinus = () =>{
        const modified = {...newQuantity};
        if(newQuantity.quantity > 0){
            modified.quantity--;
        }
        setNewQuantity(modified);
    }
    const handlePlus = () =>{
        const modified = {...newQuantity};
        if(newQuantity.quantity > 0){
            modified.quantity++;
        }
        setNewQuantity(modified);
    };

    const handleRemove = key =>{
        removeFromDb(key);
        removeCartItem(key);
    }
    return (
        <tr>
        <td>
            <Row xs={1} md={2}>
                <Col xs={12} md={4}>
                    <img src={img} alt="" xs={12} md={3}/>
                </Col>
                <Col xs={12} md={8} className="d-flex justify-content-center align-items-center">
                        <div>
                        <p>{name}</p>
                        <p>Price : <b>${price}</b></p>
                        <p>Quantity : {quantity}</p>
                        <div>
                        <button className="cart-button" onClick={handleMinus}>{minus}</button><input className="cart-input" value={newQuantity.quantity} type="number" disabled/><button className="cart-button" onClick={handlePlus}>{plus}</button>
                        </div>
                        <button className="btn btn-danger my-3" onClick={()=> handleRemove(key)}>Remove</button>
                        </div>

                </Col>
            </Row></td>
        <td>
                <div className="h-100"><p>${total}</p></div>
        </td>
      </tr>
    );
};

export default CartProduct;