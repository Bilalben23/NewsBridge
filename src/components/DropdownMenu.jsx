import React, { useState } from 'react';
import { FaDatabase, FaEllipsisV, FaFlag, FaGlobe, FaPalette } from 'react-icons/fa';
import LanguageSelector from '../pages/LanguageSelector';
import ChangeTheme from '../pages/ChangeTheme';
import CountrySelector from './CountrySelector';

export default function DropdownMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Ensure menu is closed by default
    const [clickedBtn, setClickedBtn] = useState(null); // To track which button is clicked

    // Function to toggle the menu
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    // Function to handle button clicks and track the clicked button
    function handleOnClick(menuItem) {
        setIsMenuOpen(false); // Close the dropdown when a button is clicked
        setClickedBtn(menuItem); // Set which button was clicked
    }

    return (
        <>
            <div className="dropdown dropdown-end">
                <button
                    tabIndex={0}
                    role="button"
                    className="p-2 m-1 transition-all btn btn-square btn-sm btn-ghost hover:bg-gray-800 hover:text-white"
                    aria-label="Options"
                    onClick={toggleMenu}
                >
                    <FaEllipsisV size={20} />
                </button>
                {
                    isMenuOpen && (
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu rounded-lg z-[1] mt-3.5 bg-base-100 w-52 p-2 shadow-xl border border-gray-700 text-sm"
                        >
                            <li onClick={() => handleOnClick("themes")} className='border-b border-gray-700'>
                                <button type='button' className="flex items-center gap-2 py-3 mb-1 font-semibold">
                                    <FaPalette className="text-blue-500" />
                                    Select Theme
                                </button>
                            </li>
                            <li onClick={() => handleOnClick("languages")} className='border-b border-gray-700'>
                                <button type='button' className="flex items-center gap-2 py-3 my-1 font-semibold">
                                    <FaGlobe className="text-green-500" />
                                    Choose Language
                                </button>
                            </li>
                            <li onClick={() => handleOnClick("countries")} className='border-b border-gray-700'>
                                <button type='button' className="flex items-center gap-2 py-3 my-1 font-semibold">
                                    <FaFlag className="text-red-500" />
                                    Select Country
                                </button>
                            </li>
                            <li className='disabled' >
                                <button
                                    type='button'
                                    className="flex items-center gap-2 py-3 mt-1 font-semibold"

                                >
                                    <FaDatabase className="text-purple-600" />
                                    Select Source
                                </button>
                            </li>

                        </ul>
                    )
                }
            </div>
            {
                clickedBtn === "themes" && <ChangeTheme setClickedBtn={setClickedBtn} />
            }
            {
                clickedBtn === "languages" && <LanguageSelector setClickedBtn={setClickedBtn} />
            }
            {
                clickedBtn === "countries" && <CountrySelector setClickedBtn={setClickedBtn} />
            }


        </>
    );
}
