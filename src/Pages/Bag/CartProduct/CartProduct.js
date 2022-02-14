import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './CartProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import useAuth from '../../../hooks/useAuth';

const CartProduct = ({product}) => {
    const {count,setCount} = useAuth();
    const {price, quantity, img, name} = product;
    const total = price * quantity;
    const minus = <FontAwesomeIcon icon={ faMinus } />;
    const plus = <FontAwesomeIcon icon={ faPlus } />
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
                        <button className="cart-button">{minus}</button><input className="cart-input" value={quantity} type="number" disabled/><button className="cart-button">{plus}</button>
                        </div>
                        <button className="btn btn-danger my-3">Remove</button>
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