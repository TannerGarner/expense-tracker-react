"use client";

import { createContext, useReducer } from "react";

export const AuthContext = createContext(null);
export const AuthDispatchContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, dispatch] = useReducer(authReducer, null);

  const ACTIONS = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
  };

  const authReducer = (user, action) => {
    switch (action.type) {
      case ACTIONS.LOGIN: {
        return action.user;
      }
      case ACTIONS.LOGOUT: {
        return null;
      }
      default: {
        return user;
      }
    }
  };

  return (
    <AuthContext.Provider value = { user }>
      <AuthDispatchContext.Provider value = { dispatch }>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}
