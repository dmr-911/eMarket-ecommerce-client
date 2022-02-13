import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {img, price, name, key} = product;
    const navigate = useNavigate();
    const cart = <FontAwesomeIcon icon={faCartPlus} />;
    const onHandleClick = (key) =>{
        navigate(`/product_details/${key}`)
    };
    return (
        <Col>
        <Card className="py-3 digital-cart" data-aos="fade-up">
            <div>
            <div>
                <img className="py-2" src={img} alt="" height="150px" width="150px"/>
            </div>
            <Card.Body>
            <Card.Title className="fs-6">{name.slice(0,24)}</Card.Title>
            <p><small>Price: ${price}</small></p>
            <button className="btn-products" onClick={()=>onHandleClick(key)}><span className="me-2">{cart}</span>Details</button>
            </Card.Body>
            </div>
        </Card>
        </Col>
    );
};

export default Product;