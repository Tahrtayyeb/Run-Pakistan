import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(() => {
    // Initialize auth state from localStorage
    const storedAuthState = localStorage.getItem('authState');
    return storedAuthState ? JSON.parse(storedAuthState) : {
      isAuthenticated: false,
      user: null,
      token: null
    };
  });

  useEffect(() => {
    // Log auth state changes
    console.log('Auth state updated:', authState);
    // Store auth state in localStorage
    localStorage.setItem('authState', JSON.stringify(authState));
  }, [authState]);

  const login = (user, token) => {
    console.log('Login function called with user:', user);
    const newState = {
      isAuthenticated: true,
      user: {
        username: user.username,
        email: user.email,
        id: user._id // Assuming the user object has _id instead of id
      },
      token
    };
    setAuthState(newState);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
      token: null
    });
    localStorage.removeItem('authState');
    localStorage.removeItem('token'); // Also remove the token from localStorage
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext; // This export should exist