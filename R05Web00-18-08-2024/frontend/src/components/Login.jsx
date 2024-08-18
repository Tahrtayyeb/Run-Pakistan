import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api.js';
import { useAuth } from '../context/AuthContext.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, authState } = useAuth();

  useEffect(() => {
    console.log('Current auth state:', authState);
  }, [authState]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!login) {
      setError('Authentication is not set up properly');
      return;
    }
    try {
      console.log('Attempting login with:', { email });
      const response = await api.post('/api/v1/auth/login', { email, password });
      console.log('API Response:', response.data);
      
      if (response.data && response.data.data.token && response.data.data.user) {
        console.log('Calling login function with:', response.data.data.user, response.data.data.token);
        login(response.data.data.user, response.data.data.token);
        setTimeout(() => {
          navigate('/dashboard');
        }, 100); // Short delay to ensure state update
      } else {
        console.error('Invalid response structure:', response.data);
        setError('Invalid response from server');
      }
    } catch (err) {
      console.error('API Error:', err);
      if (err.response) {
        console.error('Error response:', err.response.data);
        setError(err.response.data.message || `Server error: ${err.response.status}`);
      } else if (err.request) {
        console.error('No response received');
        setError('No response from server. Please check your internet connection.');
      } else {
        console.error('Request setup error:', err.message);
        setError('An error occurred while setting up the request.');
      }
    }
  };
  
  return (
    <div className="flex items-center justify-center md:mt-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-4 py-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-green-800">Sign in to your account</h2>
        </div>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="space-y-3 rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && <p className="mt-2 text-sm text-center text-red-600">{error}</p>}
          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-700 border border-transparent rounded-md group hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <p>New user? <Link to="/register" className="font-medium text-green-600 hover:text-green-500">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;