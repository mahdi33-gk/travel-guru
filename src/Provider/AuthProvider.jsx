import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [err,setErr] = useState(null);
    const [loading,setLoading] = useState(true);
    console.log(user)

    

    const userCreationWithEmail = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const emailSignIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    // setUser
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }

        
        
    },[])

    // signOUt
    const signoutUser = () =>{
        return signOut(auth);
    }
    const authInfo = {
        user,
        setUser,
        userCreationWithEmail,
        setErr,
        err,
        emailSignIn,
        signoutUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;