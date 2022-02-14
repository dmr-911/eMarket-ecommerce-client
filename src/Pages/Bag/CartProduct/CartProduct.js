import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './CartProduct.css';

const CartProduct = ({product}) => {
    const {price, quantity, img, name} = product;
    const total = price * quantity;
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
                        </div>

                </Col>
            </Row></td>
        <td>
            <div className="h-100 d-flex justify-content-center align-items-center">

            </div>
        </td>
        <td>${total}</td>
      </tr>
    );
};

export default CartProduct;