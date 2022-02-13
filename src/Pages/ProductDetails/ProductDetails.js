import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const {key} = useParams();
    return (
        <div>
            <h4>This is product : {key}</h4>
        </div>
    );
};

export default ProductDetails;