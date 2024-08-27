import React, { useState, useEffect } from 'react';
import api from '../../services/api.js';
import logo from '../../assets/images/logo.png';

const RaceRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    mobileNo: '',
    clubName: '',
    city: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { fullName, age, gender, mobileNo, clubName, city } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const registerWithRetry = async (formData, maxRetries = 3) => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        console.log(`Attempt ${i + 1} to register:`, formData);
        const response = await api.post('/api/v1/race/register', formData);
        console.log('Registration successful:', response.data);
        return response.data;
      } catch (error) {
        console.error(`Registration attempt ${i + 1} failed:`, error);
        if (i === maxRetries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retrying
      }
    }
  };


  const onSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!navigator.onLine) {
      setError('You are offline. Please check your internet connection and try again.');
      return;
    }
    if (!isAuthenticated) {
      setError('You must be logged in to register for a race.');
      return;
    }
    try {
      const result = await registerWithRetry(formData);
      setSuccess(result.message || 'Registration successful!');
      setFormData({
        fullName: '',
        age: '',
        gender: '',
        mobileNo: '',
        clubName: '',
        city: ''
      });
    } catch (err) {
      console.error('Race registration error:', err);
      if (err.response) {
        console.error('Error response:', err.response.data);
        if (err.response.status === 401) {
          setError('Your session has expired. Please log in again.');
          // Optionally, you can redirect to the login page here
        } else {
          setError(err.response.data.message || `Server error: ${err.response.status}`);
        }
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
    <>
    <div className="flex justify-center items-center md:mt-16 bg-gray-100 min-h-screen">
  <div className="w-full max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    <img 
      src={logo}
      alt="Run Lahore Time Trial Series" 
      className="w-full h-48 object-fit rounded-t-lg mb-6"
    />
    <form onSubmit={onSubmit} className="space-y-6">
      {error && <div className="error text-red-500 text-center bg-red-100 p-3 rounded-lg">{error}</div>}
      <h1 className='text-3xl text-center font-bold text-green-800 mb-8'>
        Run Lahore Time Trial Series
        <span className="block text-xl font-semibold text-gray-600 mt-2">12th Edition</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={fullName}
          onChange={onChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={age}
          onChange={onChange}
          required
          min="0"
          max="120"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      <select
        name="gender"
        value={gender}
        onChange={onChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <div>
        <input
          type="tel"
          placeholder="Mobile Number (e.g., 03331122334)"
          name="mobileNo"
          value={mobileNo}
          onChange={onChange}
          required
          pattern="0[0-9]{10}"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <p className="text-sm text-gray-500 mt-1">Enter 11 digits starting with 0</p>
      </div>
      <input
        type="text"
        placeholder="Club Name"
        name="clubName"
        value={clubName}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        value={city}
        onChange={onChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300"
      >
        Register for Race
      </button>
      {success && (
        <div className="success text-green-600 text-center font-semibold mt-4 bg-green-100 p-3 rounded-lg">
          {success}
        </div>
      )}
    </form>
  </div>
</div>
  </>
);
};

export default RaceRegistrationForm;