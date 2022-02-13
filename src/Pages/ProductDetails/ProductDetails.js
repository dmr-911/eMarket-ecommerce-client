import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const {key} = useParams();
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/');
    }
    return (
        <div>
            <Container>
            <Breadcrumb>
            <Breadcrumb.Item onClick={handleClick}>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Product details</Breadcrumb.Item>
            </Breadcrumb>
            </Container>
            <h4>This is product : {key}</h4>
        </div>
    );
};

export default ProductDetails;