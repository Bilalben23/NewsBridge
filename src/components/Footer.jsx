import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Element } from "react-scroll";
import { useState } from 'react';

export default function Footer({ inputRef }) {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle the subscription logic here
        console.log('Subscribed with email:', email);
        setEmail('');
    };

    return (
        <footer className="py-8 border-t border-gray-800 bg-base-300">
            <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold text-transparent bg-gradient-to-tr from-primary to-secondary bg-clip-text">NewsBridge</h2>
                </div>

                <div className="flex flex-wrap justify-center mb-6 space-x-4 md:mb-0">
                    <Link to="/" className="transition hover:text-gray-400">Home</Link>
                    <Link to="/categories" className="transition hover:text-gray-400">Categories</Link>
                    <Link to="/search" className="transition hover:text-gray-400">Search</Link>
                    <Link to="/about-us" className="transition hover:text-gray-400">About Us</Link>
                    <Link to="/contact" className="transition hover:text-gray-400">Contact</Link>
                </div>

                <div className="flex space-x-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-gray-400 tooltip"
                        data-tip="Facebook"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-gray-400 tooltip"
                        data-tip="Twitter"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-gray-400 tooltip"
                        data-tip="Instagram"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-gray-400 tooltip"
                        data-tip="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            <Element name="subscribe-form">
                <div className="flex flex-col items-center mt-8">
                    <h2 className="text-lg font-bold ">Subscribe for Updates</h2>
                    <form onSubmit={handleSubscribe} className="flex flex-col items-center mt-4 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                        <div className="flex items-center space-x-2 min-w-[320px] input input-bordered input-secondary">
                            <FaEnvelope className='text-secondary' />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email..."
                                className='w-full text-sm '
                                ref={inputRef}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className='btn btn-secondary btn-outline'
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </Element>

            <div className="container pt-4 mx-auto mt-8 text-center border-t border-gray-700">
                <p className="mb-1 text-sm transition duration-300 hover:text-gray-500">
                    &copy; {new Date().getFullYear()} <span className="font-semibold text-primary">NewsApp</span>. All rights reserved.
                </p>
                <p className="text-sm">
                    Innovatively crafted by <span className="font-semibold text-secondary">Bilal Benyoussef</span>.
                </p>
            </div>
        </footer>
    );
}
