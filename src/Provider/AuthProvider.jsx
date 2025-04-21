import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.init";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [err,setErr] = useState(null);

    

    const userCreationWithEmail = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const emailSignIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {
        user,
        setUser,
        userCreationWithEmail,
        setErr,
        err,
        emailSignIn
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;