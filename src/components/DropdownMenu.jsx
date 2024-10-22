import React, { useState } from 'react';
import { FaEllipsisV, FaFlag, FaGlobe, FaPalette } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import LanguageSelector from '../pages/LanguageSelector';
import ChangeTheme from '../pages/ChangeTheme';

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
                    <FaEllipsisV />
                </button>
                {
                    isMenuOpen && (
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu rounded-lg z-[1] mt-3.5 bg-base-100 w-52 p-2 shadow-lg border border-gray-700 text-sm transition-all duration-200 ease-in-out"
                        >
                            <li onClick={() => handleOnClick("themes")}>
                                <button type='button' className="flex items-center gap-2 font-semibold">
                                    <FaPalette className="text-blue-500" />
                                    Choose Theme
                                </button>
                            </li>
                            <li onClick={() => handleOnClick("languages")}>
                                <button type='button' className="flex items-center gap-2 font-semibold">
                                    <FaGlobe className="text-green-500" />
                                    News Language
                                </button>
                            </li>
                            <li onClick={() => handleOnClick("country")}>
                                <button type='button' className="flex items-center gap-2 font-semibold">
                                    <FaFlag className="text-red-500" />
                                    Country
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
                // Show LanguageSelector only when "Language" is clicked
                clickedBtn === "languages" && <LanguageSelector setClickedBtn={setClickedBtn} />
            }

        </>
    );
}
