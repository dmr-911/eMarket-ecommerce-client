import React, { useState } from 'react';
import { Breadcrumb, Carousel, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams, Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import DetailsAccordion from '../DetailsAccordion/DetailsAccordion';

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
    return (
        <div className="mt-5">
            <Container className="pt-3">
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
                            src={product?.img}
                            alt="First slide"
                            height="218"
                            width="218"
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
                        <div className="mb-3">
                            <div className="round">
                                <input type="checkbox" id="checkbox" />
                                <label htmlFor="checkbox"></label>
                            </div>
                        </div>
                        <p><b>Options : </b> Coming soon</p>
                        <button className="btn btn-success w-100 fs-5 my-3">ADD TO BAG</button>

                        {
                            product?.features && <>
                            <h5><b>Details</b></h5>
                            {
                                product?.features?.map(pd =>
                                    <small key={pd.value}>
                                    <li>{pd?.description}</li>
                                    <li>{pd?.value}</li>
                                    </small>)
                            }
                            </> 
                        }
                        <hr />
                        <DetailsAccordion></DetailsAccordion>
                        
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ProductDetails;