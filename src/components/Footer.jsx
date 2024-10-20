import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Element } from "react-scroll"


export default function Footer() {
    return (
        <footer className="py-8 text-white border-t border-gray-800 bg-base-300">
            <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold text-transparent bg-gradient-to-tr from-primary to-secondary bg-clip-text">NewsApp</h2>
                </div>

                <div className="flex mb-6 space-x-6 md:mb-0">
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
                        data-tip="Linkden"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className="container pt-4 mx-auto mt-8 text-center border-t border-gray-700">
                <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} NewsApp. All rights reserved.</p>
                <p className="text-sm text-gray-500">Innovatively crafted by Bilal Benyoussef.</p>
            </div>
            <Element name="subscribe-form">
                <h1>form</h1>
            </Element>
        </footer>
    );
}
