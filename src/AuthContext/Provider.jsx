/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
export const AuthContexApi = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
const auth = getAuth(app)
const Provider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createAccount = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const sendVerificationCode = () =>{
        return sendEmailVerification(auth.currentUser)
    }

    const updateUserProfile = (name) =>{
        return updateProfile(auth.currentUser,{
            displayName:name
        })
    }

    const logIng = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const forgetPassword = (email) =>{
        return sendPasswordResetEmail(auth,email);
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authInfo = {
        user,
        createAccount,
        sendVerificationCode,
        updateUserProfile,
        logIng,
        forgetPassword,
        logOut,
        loading
    }
    return (
        <AuthContexApi.Provider value={authInfo}>
            {children}
        </AuthContexApi.Provider>
    );
};

export default Provider;