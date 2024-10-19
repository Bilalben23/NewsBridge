import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaEnvelope } from "react-icons/fa"

export default function Header() {
    return (
        <header className='fixed top-0 flex items-center justify-between w-full py-2 pl-12 pr-6 shadow bg-base-300'>
            <div >
                <img src='https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5ld3N8ZW58MHx8MHx8fDA%3D' alt='logo' className='w-[60px] h-[60px] rounded-full' />
            </div>
            <nav >
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
                </ul>
            </nav>
            <form className='flex items-stretch space-x-3 '>
                <div className='flex items-center py-5 space-x-2 input input-sm'>
                    <FaEnvelope size={20} className='text-secondary' />
                    <input type="email" name="email" placeholder='Email Address...' className='text-sm ' />
                </div>
                <button type="submit" className='btn-outline btn-secondary btn-sm btn !h-[50px]'>Subscribe</button>
            </form>
        </header>
    )
}
