import { useState } from "react";
import initializationAuthentication from "../firebase/firebase.init";

initializationAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState({});

    return {user}
};

export default useFirebase;