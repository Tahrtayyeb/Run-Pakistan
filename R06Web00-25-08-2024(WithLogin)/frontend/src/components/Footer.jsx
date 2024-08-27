import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebookF, FaHome, FaHeartbeat, FaCalendarAlt, FaDumbbell, FaNewspaper, FaUsers } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Footer = () => {
    const quickLinks = [
        { to: "/", label: "Home", icon: FaHome },
        { to: "/injury-homepage", label: "Injury Recovery", icon: FaHeartbeat },
        { to: "/events-main-page", label: "Events", icon: FaCalendarAlt },
        { to: "/training-homepage", label: "Training Plans", icon: FaDumbbell },
        { to: "/news-main-page", label: "News", icon: FaNewspaper },
        { to: "/club-in-pakistan", label: "Running Clubs", icon: FaUsers },
    ];

    return (
        <footer className="bg-gradient-to-b from-green-800 to-green-600 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                    <h3 className="text-2xl font-bold">
                        About
                        </h3>
                        <p className="text-gray-200">
                        <img src={logo} alt="RunPakistan Logo" className="h-8 w-auto inline-block" /> aims for a healthier Pakistan through promoting running and outdoor sports. We provide the latest trends and insights in the running world and offer free training plans from the world's top coaches.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 md:ml-10">
                        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {quickLinks.map((link, index) => (
                                <Link key={index} to={link.to} className="flex items-center space-x-2 p-2 rounded-lg bg-green-700 hover:bg-green-600 transition duration-300">
                                    <link.icon className="text-green-300" />
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Us Section */}
                    <div className="space-y-4 md:ml-20">
                        <h3 className="text-2xl font-bold">Contact Us</h3>
                        <div className="space-y-2">
                            <p><FaEnvelope className="inline mr-2" /> info@runpakistan.com</p>
                            <p><FaWhatsapp className="inline mr-2" /> 92-333-4442453</p>
                            <p><FaMapMarkerAlt className="inline mr-2" /> Lahore, Pakistan</p>
                        </div>
                        <div className="mt-4">
                            <p className="mb-2">Follow us:</p>
                            <div className="flex space-x-4">
                                <a href="https://www.instagram.com/pakistanrun" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition duration-300">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="https://twitter.com/runpakistan" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition duration-300">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61561138174928" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition duration-300">
                                    <FaFacebookF size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 pt-8 border-t border-green-500 text-center">
                    <p className="text-sm text-gray-200">
                        &copy; {new Date().getFullYear()} runPAKISTAN. All rights reserved. | Designed and developed by <a href="/" className="underline hover:text-green-300" target="_blank" rel="nofollow">AR Developers</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;