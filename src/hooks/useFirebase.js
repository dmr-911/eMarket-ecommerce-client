import { useState } from "react";
import initializationAuthentication from "../firebase/firebase.init";
import useProducts from "./useProducts";

initializationAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const {products, setProducts} = useProducts();

    return {user, products, setProducts};
};

export default useFirebase;