import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

const AuthProvider = ({children}) => {
    const [ user , setUser] = useState()
    const [loading, setLoading] = useState(true)
    console.log(user)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth , email , password)
    }

    

    const updateUser = (updateData) =>{
        return updateProfile(auth.currentUser , updateData)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
       return signOut(auth)
    }

    useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false)

        if (currentUser) {
            axios.get('https://server-side-topaz.vercel.app', {
                headers: {
                    authorization: `Bearer ${currentUser.accessToken}`
                }
            })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
        }
    });

    return () => unSubscribe();
}, []);

  
    const allInfo = {
        createUser,
        user,
        setUser,
         updateUser,
         signIn,
         logOut,
         googleSignIn ,
         loading,
         setLoading
        
    }
    return (
    <AuthContext value={allInfo}>
        {children}
    </AuthContext>
    );
};

export default AuthProvider;