import React from 'react';
import { Container } from 'react-bootstrap';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    return (
        <Container>
            <Products></Products>
        </Container>
    );
};

export default Home;