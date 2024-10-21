import React, { useState } from 'react'
import { FaEllipsisV, FaFlag, FaGlobe, FaPalette } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function DropdownMenu() {
    const [isMenuOpen, setIsOpenMenu] = useState(true)

    function handleOnClick() {
        setIsOpenMenu(!isMenuOpen)
    }


    return (
        <div className="dropdown dropdown-end">
            <button
                tabIndex={0}
                role="button"
                className="p-2 m-1 transition-all btn btn-square btn-sm btn-ghost hover:bg-gray-800 hover:text-white"
                aria-label="Options"
                onClick={handleOnClick}
            >
                <FaEllipsisV />
            </button>
            {
                isMenuOpen && <ul
                    tabIndex={0}
                    className="dropdown-content menu rounded-lg z-[1] mt-3.5 bg-base-100 w-52 p-2 shadow-lg border border-gray-700 text-sm transition-all duration-200 ease-in-out"
                >
                    <li onClick={handleOnClick}>
                        <NavLink to="/change-theme" className="flex items-center gap-2 py-3">
                            <FaPalette className="text-blue-500" />
                            Choose Theme
                        </NavLink>
                    </li>
                    <li onClick={handleOnClick}>
                        <NavLink to="/change-language" className="flex items-center gap-2 py-3" >
                            <FaGlobe className="text-green-500" />
                            Language
                        </NavLink>
                    </li>
                    <li onClick={handleOnClick}>
                        <NavLink to="/change-country" className="flex items-center gap-2 py-3">
                            <FaFlag className="text-red-500" />
                            Country
                        </NavLink>
                    </li>
                </ul>
            }
        </div>


    )
}
