import { useState } from "react";
import initializationAuthentication from "../firebase/firebase.init";
import useProducts from "./useProducts";

initializationAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [count, setCount] = useState(0);
    const {products, setProducts} = useProducts();

    return {user, products, setProducts, count, setCount};
};

export default useFirebase;