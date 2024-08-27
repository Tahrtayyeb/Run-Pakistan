import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FaHome, FaCalendarAlt, FaDumbbell, FaNewspaper, FaHeartbeat, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();
  const { authState } = useAuth();

  const menuItems = [
    { icon: <FaHome />, text: 'Home', link: '/' },
    { icon: <FaCalendarAlt />, text: 'Upcoming Events', link: '/events-main-page' },
    { icon: <FaDumbbell />, text: 'Training Plans', link: '/training-homepage' },
    { icon: <FaNewspaper />, text: 'News Homepage', link: '/news-main-page' },
    { icon: <FaHeartbeat />, text: 'Injury & Recovery', link: '/injury-homepage' },
    { icon: <FaUsers />, text: 'Clubs in Pakistan', link: '/club-in-pakistan' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 mt-5 md:mt-20">
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex items-center space-x-4"
            >
              <div className="text-green-600 text-3xl">{item.icon}</div>
              <div className="text-gray-800 font-semibold">{item.text}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;