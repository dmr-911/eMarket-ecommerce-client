import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../../../hooks/useAuth';

const Product = ({product}) => {
    const {img, price, stock, name, star, features} = product;
    const {count,setCount} = useAuth();
    const cart = <FontAwesomeIcon icon={faCartPlus} />;
    const onHandleClick = () =>{
        const modified = count+1;
        setCount(modified);
    };
    return (
        <Col>
        <Card className="p-3 digital-cart" data-aos="fade-up">
            <div>
            <div>
                <img className="" src={img} alt="" height="300px" width="150px"/>
            </div>
            <Card.Body>
            <Card.Title className="fs-6">{name.slice(0,24)}</Card.Title>
            <p><small>Price: ${price}</small></p>
            <button className="btn-products" onClick={onHandleClick}><span className="me-2">{cart}</span>Details</button>
            </Card.Body>
            </div>
        </Card>
        </Col>
    );
};

export default Product;