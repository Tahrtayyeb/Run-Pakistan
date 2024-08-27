// src/components/ProtectedRoute.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import LoginRegisterModal from './LoginModal.jsx';

const ProtectedRoute = ({ children }) => {
  const { authState } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      setIsModalOpen(true);
    }
  }, [authState.isAuthenticated]);

  if (!authState.isAuthenticated) {
    return (
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gray-200 opacity-50"></div>
        <div className="pointer-events-none blur-sm"> {/* Add blur-sm here */}
          {children}
        </div>
        <LoginRegisterModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;