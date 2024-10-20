import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaEnvelope } from "react-icons/fa"

export default function Header() {
    return (
        <header className='fixed top-0 flex items-center justify-between w-full py-2 pl-8 pr-6 shadow bg-base-300 z-50'>
            <div className='w-1/5' >
                <h1 className='text-2xl font-bold'>NewsApp</h1>
            </div>
            <nav className='flex justify-center w-3/5'>
                <ul className='menu menu-horizontal'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categories">Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/search">Search</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <form className='flex items-stretch space-x-1.5' >
                <div className='flex items-center py-5 space-x-2 input-secondary input-bordered input input-sm'>
                    <FaEnvelope size={17} className='text-secondary' />
                    <input type="email" name="email" placeholder='Email Address...' className='text-xs ' />
                </div>
                <button type="submit" className='btn-outline btn-secondary btn-sm btn !h-[50px] text-xs'>Subscribe</button>
            </form>
        </header>
    )
}
