import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
                        {/* About Section */}
                        <div className="mb-4 md:mb-0 w-full md:w-1/2 text-center md:text-left">
                            <h3 className="text-xl font-bold mb-2 text-green-500">About runPAKISTAN</h3>
                            <p className="md:mr-16">runPAKISTAN aims for a healthier Pakistan through promoting running and outdoor sports. We provide the latest trends and insights in the running world and offer free training plans from the world's top coaches. Join us in our mission for a healthier Pakistan.</p>
                        </div>

                        {/* Quick Links Section */}
                        <div className="mb-4 md:mb-0 w-full md:w-1/3 text-center">
                            <h3 className="text-xl font-bold mb-2 text-green-500">Quick Links</h3>
                            <div className="flex flex-wrap justify-center md:justify-start -mx-2">
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <button className="w-full bg-gray-800 text-white rounded-md px-4 py-2 mb-2 hover:bg-green-500 hover:text-white">
                                        <Link to="/">Home</Link>
                                    </button>
                                    <button className="w-full bg-gray-800 text-white rounded-md px-4 py-2 mb-2 hover:bg-green-500 hover:text-white">
                                        <Link to="/events-main-page">Upcoming Events</Link>
                                    </button>
                                    <button className="w-full bg-gray-800 text-white rounded-md px-4 py-2 mb-2 hover:bg-green-500 hover:text-white">
                                        <Link to="/training-homepage">Training Plans</Link>
                                    </button>
                                </div>
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <button className="w-full bg-gray-800 text-white rounded-md px-4 py-2 mb-2 hover:bg-green-500 hover:text-white">
                                        <Link to="/injury-homepage">Injury & Recovery</Link>
                                    </button>
                                    <button className="w-full bg-gray-800 text-white rounded-md px-4 py-2 mb-2 hover:bg-green-500 hover:text-white">
                                        <Link to="/news-mainpage">Must Read</Link>
                                    </button>
                                    <button className="w-full bg-gray-800 text-white rounded-md px-4 py-2 mb-2 hover:bg-green-500 hover:text-white">
                                        <Link to="/club-in-pakistan">Clubs in Pakistan</Link>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Contact Us Section */}
                        <div className="w-full md:w-1/3 text-center">
                            <h3 className="text-xl font-bold mb-2 text-green-500">Contact Us</h3>
                            <p>Email: info@runpakistan.com</p>
                            <p>WhatsApp: +92333442453</p>
                            <p>Address: Lahore, Pakistan</p>
                            {/* Social Media Links */}
                            <div className="flex justify-center space-x-4 mt-4">
                                <a href="https://www.instagram.com/runpakistan" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.facebook.com/runpakistan" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://twitter.com/runpakistan" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                                    <i className="fab fa-x-twitter"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/runpakistan" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright Section */}
                <div className="container mx-auto mt-6 px-4 text-center text-gray-500 text-sm">
                    <p>&copy; 2023-2024 runPAKISTAN. All rights reserved. | Designed and developed by <Link to="/" className="underline" target="_blank" rel="nofollow">AR Developers</Link></p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
