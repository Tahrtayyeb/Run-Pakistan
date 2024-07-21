// components/RaceRegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import api from '../../services/api.js';

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

  const onSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('accessToken'); // Assuming you store the token as 'accessToken'
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };
      const res = await axios.post('/api/v1/race/register', formData, config);
      setSuccess(res.data.message || 'Registration successful!');
      setFormData({
        fullName: '',
        age: '',
        gender: '',
        mobileNo: '',
        clubName: '',
        city: ''
      });
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during registration');
    }
  };

  return (
        <>
      <div className="flex justify-center items-center md:mt-24">
        <form onSubmit={onSubmit} className="space-y-4 w-full max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
          <h1 className='text-2xl text-center font-bold text-green-800'>
            Run Lahore Time Trial Series - 9th Edition
          </h1>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={fullName}
            onChange={onChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            name="gender"
            value={gender}
            onChange={onChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="tel"
            placeholder="Mobile Number"
            name="mobileNo"
            value={mobileNo}
            onChange={onChange}
            required
            pattern="[0-9]{10}"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Club Name"
            name="clubName"
            value={clubName}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={city}
            onChange={onChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Register for Race
          </button>
        </form>
      </div>
    </>
  );
};

export default RaceRegistrationForm;