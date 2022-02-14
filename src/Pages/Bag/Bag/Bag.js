import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { getStoredCart } from '../../../utilities/localStorage';
import CartProduct from '../CartProduct/CartProduct';
import './Bag.css';


const Bag = () => {
    const {products, setCount} = useAuth();
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    let totalQuantity = 0 ;
    let totalPrice = 0;

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

    useEffect(()=>{
        console.log(cart);
        for(const product of cart){
            totalPrice = totalPrice + product.price*product.quantity;
            setTotal(totalPrice)
        }
    },[cart])

    for(const product of cart){
        totalQuantity = totalQuantity + product.quantity;
    };
    
    const removeCartItem = key =>{
        const rest = cart.filter(product => product.key !== key);
        setCart(rest);
    };
    
    setCount(totalQuantity);

    const handleCheckout = () =>{
        navigate('/checkout');
    }
    
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
                    removeCartItem= {removeCartItem}
                    ></CartProduct>)
                }
                </tbody>
            </Table>
            <div className="me-auto border border-1 bag-footer">
                Subtotal : <b>${total}</b>
            </div>
            <Button variant="success" className="me-auto my-3" onClick={handleCheckout}>Proceed to checkout</Button>
        </Container>
    );
};

export default Bag;