/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
export const AuthContexApi = createContext(null)
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
const auth = getAuth(app)
const Provider = ({children}) => {
    const [user,setUser] = useState(null)


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

    const authInfo = {
        user,
        createAccount,
        sendVerificationCode,
        updateUserProfile
    }
    return (
        <AuthContexApi.Provider value={authInfo}>
            {children}
        </AuthContexApi.Provider>
    );
};

export default Provider;