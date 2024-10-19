// src/components/Footer.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import FontAwesome icons
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="py-8 text-white bg-base-300">
            <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold">NewsApp</h2>
                </div>

                <div className="flex mb-6 space-x-6 md:mb-0">
                    <Link to="/" className="transition hover:text-gray-400">Home</Link>
                    <Link to="/categories" className="transition hover:text-gray-400">Categories</Link>
                    <Link to="/categories" className="transition hover:text-gray-400">Search</Link>
                    <Link to="/about-us" className="transition hover:text-gray-400">About Us</Link>
                    <Link to="/contact" className="transition hover:text-gray-400">Contact</Link>
                </div>

                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-gray-400">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-gray-400">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-gray-400">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-gray-400">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className="container pt-4 mx-auto mt-8 text-center border-t border-gray-700">
                <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} NewsApp. All rights reserved.</p>
                <p className="text-sm text-gray-500">Innovatively crafted by Bilal Benyoussef.</p>
            </div>
        </footer>
    );
}
