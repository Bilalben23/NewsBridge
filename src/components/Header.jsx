import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaList, FaBell, FaPhoneAlt, FaSearch } from "react-icons/fa"
import { Link as ScrollLink } from 'react-scroll';


export default function Header() {
    return (
        <header className='fixed top-0 z-50 flex items-center justify-between w-full py-1.5 px-6  shadow bg-base-300 border-b border-gray-900'>
            <div className='w-1/5' >
                <h1 className='text-2xl font-bold text-transparent bg-gradient-to-tr from-primary to-secondary bg-clip-text'>NewsApp</h1>
            </div>
            <nav className='flex justify-center min-w-3/5'>
                <ul className='space-x-1 menu menu-horizontal'>
                    <li>
                        <NavLink to="/" className='flex items-center gap-2'>
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categories" className='flex items-center gap-2'>
                            <FaList /> Categories
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" className='flex items-center gap-2'>
                            <FaSearch /> Search
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us" className='flex items-center gap-2'>
                            <FaInfoCircle /> About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className='flex items-center gap-2'>
                            <FaPhoneAlt /> Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='flex justify-end w-1/5' >
                <ScrollLink
                    to="subscribe-form"
                    smooth={true}
                    duration={500}
                >
                    <button type="submit" className='btn-outline btn-secondary btn-sm btn rounded-3xl h-[50px] text-xs flex items-center gap-2'>
                        <FaBell size={16} className='hover:text-black' />
                        Subscribe
                    </button>
                </ScrollLink>
            </div >
        </header >
    )
}
