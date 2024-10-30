import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaList, FaBell, FaPhoneAlt, FaSearch } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
import DropdownMenu from './DropdownMenu';
import SmallMenu from './SmallMenu';

export default function Header({ handleOnClick }) {

    return (
        <header className='fixed top-0 z-40 flex items-center justify-between w-full py-2 md:py-1.5 pl-6 pr-2 shadow bg-base-300 border-b border-gray-900'>
            <div className='flex-1 md:w-1/5'>
                <h1 className='text-2xl font-bold text-transparent bg-gradient-to-tr from-primary to-secondary bg-clip-text'>NewsBridge</h1>
            </div>
            <nav className='justify-center hidden md:flex min-w-3/5'>
                <ul className='space-x-1 menu menu-horizontal *:font-semibold'>
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
            <div className='relative items-center justify-end hidden w-1/5 space-x-2 md:flex'>
                <ScrollLink
                    to="subscribe-form"
                    smooth={true}
                    duration={1000}
                >
                    <button type='button' className='btn-outline btn-secondary btn-sm btn rounded-3xl h-[50px] text-xs flex items-center gap-2' onClick={handleOnClick}>
                        <FaBell size={16} className='hover:text-black' />
                        Subscribe
                    </button>
                </ScrollLink>
                <DropdownMenu />
            </div>

            {/* small screen menu */}
            <SmallMenu handleOnClick={handleOnClick} />
        </header>
    );
}
