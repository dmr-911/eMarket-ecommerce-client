import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { getStoredCart } from '../../../utilities/localStorage';
import CartProduct from '../CartProduct/CartProduct';
import './Bag.css';


const Bag = () => {
    const {products, setCount} = useAuth();
    const [cart, setCart] = useState([]);
    let totalQuantity = 0 ;

    useEffect(()=>{
        const savedCart = getStoredCart();
        const storedCart = [];
        if(products?.length){
            for(const key in savedCart){
                const addedProduct = products?.find(product => product.key === key);
                addedProduct.quantity= savedCart[key];
                storedCart.push(addedProduct);
            }
        };
        setCart(storedCart);
    },[products]);

    for(const product of cart){
        totalQuantity = totalQuantity + product.quantity;
    }
    setCount(totalQuantity);
    return (
        <Container className="mt-5 pt-5">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {
                    cart.map(product =><CartProduct
                    key={product.key}
                    product={product}
                    ></CartProduct>)
                }
                </tbody>
            </Table>
        </Container>
    );
};

export default Bag;