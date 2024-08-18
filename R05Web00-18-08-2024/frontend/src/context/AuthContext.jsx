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
    setAuthState(prevState => {
      const newState = {
        isAuthenticated: true,
        user: {
          username: user.username,
          email: user.email,
          id: user.id
        },
        token
      };
      console.log('New auth state:', newState);
      localStorage.setItem('authState', JSON.stringify(newState));
      localStorage.setItem('token', token);
      return newState;
    });
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
      token: null
    });
    localStorage.removeItem('authState');
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