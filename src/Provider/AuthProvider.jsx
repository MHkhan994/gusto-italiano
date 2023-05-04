import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

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

    // Logout function
    const logOut = () => {
        return signOut(auth)
    }

    // sign in with google
    const logInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // sign in github
    const logInGithub = () => {
        return signInWithPopup(auth, gitProvider)
    }

    // get loogged in user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])
    const authInfo = {
        createUser,
        logIn,
        logInGoogle,
        logInGithub,
        profileUpdate,
        logOut,
        loading,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;