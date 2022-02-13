import React, { useState } from 'react';
import { Breadcrumb, Carousel, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams, Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './ProductDetails.css';

const ProductDetails = () => {
    const {key} = useParams();
    const {products} = useProducts();
    const navigate = useNavigate();
    const product = products?.find(pd => pd?.key === key);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);}

    const handleClick = () =>{
        navigate('/');
    };
    console.log(product);
    return (
        <div>
            <Container>
            <Breadcrumb>
            <Breadcrumb.Item onClick={handleClick}>Home</Breadcrumb.Item>
            <Breadcrumb.Item onClick={handleClick}>Product details</Breadcrumb.Item>
            <Breadcrumb.Item active>{product?.name?.slice(0,100)}</Breadcrumb.Item>
            </Breadcrumb>
            </Container>
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                            className="d-block img-fluid mx-auto"
                            src={product?.img}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                    <Col xs={12} md={7} className="text-start">
                        <h4>{product?.name}</h4>
                        <del>Price : ${product?.price}</del>
                        <p>Price : <span className="text-danger fw-bold fs-3">${Math.ceil(product?.price - (20*product?.price/100))}</span> (20% off)</p>
                        <p><b>Colour : </b> Coming soon</p>
                        <div>
                            <div className="round">
                                <input type="checkbox" id="checkbox" />
                                <label for="checkbox"></label>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ProductDetails;