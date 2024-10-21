import React from 'react'
import { FaEllipsisV, FaFlag, FaGlobe, FaPalette } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function DropdownMenu() {
    return (
        <div className="dropdown dropdown-end">
            <button
                tabIndex={0}
                role="button"
                className="p-2 m-1 transition-all btn btn-square btn-sm btn-ghost hover:bg-gray-800 hover:text-white"
                aria-label="Options"
            >
                <FaEllipsisV />
            </button>
            <ul
                tabIndex={0}
                className="dropdown-content menu rounded-lg z-[1] mt-3.5 bg-base-100 w-52 p-2 shadow-lg border border-gray-700 text-sm transition-all duration-200 ease-in-out"
            >
                <li>
                    <Link to="/choose-theme" className="flex items-center gap-2 py-3">
                        <FaPalette className="text-blue-500" />
                        Choose Theme
                    </Link>
                </li>
                <li>
                    <Link to="/choose-language" className="flex items-center gap-2 py-3">
                        <FaGlobe className="text-green-500" />
                        Language
                    </Link>
                </li>
                <li>
                    <Link to="/choose-country" className="flex items-center gap-2 py-3">
                        <FaFlag className="text-red-500" />
                        Country
                    </Link>
                </li>
            </ul>
        </div>


    )
}
