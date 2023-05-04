import React, { createContext } from 'react';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    // create user function
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in function
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const authInfo = {
        createUser,
        logIn,
        profileUpdate
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;