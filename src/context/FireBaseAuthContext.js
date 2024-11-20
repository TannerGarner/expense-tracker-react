"use client"

import { initializeFirebase } from "@/services/firebase";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth"

const FirebaseAuthContext = createContext(null);

export default function FirebaseAuthProvider({ children }) {
    initializeFirebase();

    useEffect(()=>{
        
    }, [])
}