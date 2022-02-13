import React from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const {products} = useAuth();
    return (
        <div>
            <Row xs={1} md={4} className="g-3 my-3">
                {
                    products.map(product => <Product
                    key={product.key}
                    product={product}
                    ></Product>)
                }
            </Row>
        </div>
    );
};

export default Products;