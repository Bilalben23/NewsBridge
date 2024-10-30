import React, { useState } from 'react';
import {
    FaArrowLeft, FaBars, FaBell, FaHome, FaInfoCircle, FaList, FaPhoneAlt, FaSearch
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import DropdownMenu from './DropdownMenu';

export default function SmallMenu({ handleOnClick }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="md:hidden">
            <div className='flex items-center'>
                <button>
                    <DropdownMenu />
                </button>
                <button
                    type="button"
                    aria-label="Toggle Menu"
                    className='btn btn-circle btn-ghost'
                    onClick={handleMenuToggle}
                >
                    <FaBars size={30} />
                </button>

            </div>


            <nav
                className={`fixed top-0 right-0 w-full h-screen transition-transform duration-300 bg-base-300 border-t border-base-100 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-start px-4 space-x-2">
                    <button
                        type="button"
                        aria-label="Close Menu"
                        className="mt-1 btn btn-circle btn-neutral"
                        onClick={closeMenu}
                    >
                        <FaArrowLeft size={25} />
                    </button>
                </div>

                <ul className="flex-1 px-4 space-y-0.5 font-semibold menu menu-lg menu-vertical" onClick={closeMenu}>
                    <li>
                        <NavLink to="/" className="flex items-center gap-2" aria-label="Home">
                            <FaHome size={20} /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categories" className="flex items-center gap-2" aria-label="Categories">
                            <FaList size={20} /> Categories
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" className="flex items-center gap-2" aria-label="Search">
                            <FaSearch size={20} /> Search
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us" className="flex items-center gap-2" aria-label="About Us">
                            <FaInfoCircle size={20} /> About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="flex items-center gap-2" aria-label="Contact">
                            <FaPhoneAlt size={20} /> Contact
                        </NavLink>
                    </li>
                    <li className="border-t border-base-200" onClick={closeMenu}>
                        <button
                            type="button"
                            className="flex items-center h-12 gap-2 mt-4 w-fit btn btn-outline btn-secondary btn-sm rounded-3xl"
                            aria-label="Subscribe"
                            onClick={handleOnClick}
                        >
                            <FaBell size={20} />
                            Subscribe
                        </button>
                    </li>
                </ul>

            </nav>
        </div >
    );
}
