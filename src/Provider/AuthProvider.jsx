import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [err,setErr] = useState(null);
    const [loading,setLoading] = useState(true);

    

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
    // signinwithGoogle
    const googleSignIn = (provider) => {
        return signInWithPopup(auth,provider);
    }
    // udpateUser
    const userUpdate= (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }
    // forgotpass
    const passForgot = (email) =>{
        return sendPasswordResetEmail(auth, email);
    }
    const authInfo = {
        passForgot,
        user,
        setUser,
        userCreationWithEmail,
        setErr,
        err,
        emailSignIn,
        signoutUser,
        googleSignIn,
        userUpdate
    }
    console.log(user)


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;