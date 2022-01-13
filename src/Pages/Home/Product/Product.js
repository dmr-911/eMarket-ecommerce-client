import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = ({product}) => {
    const {img, price, stock, name, star, features} = product;
    const cart = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <Col>
        <Card className="p-3 digital-cart" data-aos="fade-up">
            <div>
                <div className="d-flex justify-content-between">
                    <div className="bg-danger text-white px-2">
                        <span>5% off</span>
                    </div>
                    <span className="far fa-heart favorite"></span>
                </div>
            </div>
            <Row md={2}>
            <div>
                <Card.Img className="" src={img} alt="" height="300px"/>
            </div>
            <Card.Body>
            <Card.Title>{name.slice(0,24)}</Card.Title>
            <div>
                <div className="d-flex justify-content-between">
                    <div className="text-start">
                        <p><small>Price: ${price}</small></p>
                        <p><small>Stock : {stock} items</small></p>
                        <ul>
                            <b>Features</b>
                            {
                                features?.slice(0,2).map(feature =><li
                                key={feature.value}
                                >{feature?.description}</li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <p><small><Rating
                                initialRating={star}
                                readonly
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                />
                            </small>
                        </p>
                    </div>
                </div>
            </div>
            <button className="btn-products"><span className="me-2">{cart}</span>Add to cart</button>
            </Card.Body>
            </Row>
        </Card>
        </Col>
    );
};

export default Product;