import { useEffect, useState } from 'react';
import { daisyThemes } from '../utils/daisyThemes';
import { FaPalette, FaCheck, FaTimes } from 'react-icons/fa';

export default function ChangeTheme({ setClickedBtn }) {
    const [chosenTheme, setChosenTheme] = useState(() => localStorage.getItem("news_app_theme") || "night");

    // Handle theme selection
    function handleClick(theme) {
        setChosenTheme(theme);
    }

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, []);

    // Store chosen theme in localStorage and apply to document root
    useEffect(() => {
        localStorage.setItem("news_app_theme", chosenTheme);
        document.documentElement.setAttribute("data-theme", chosenTheme);
    }, [chosenTheme]);

    // Handle modal close when clicking outside of it
    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            setClickedBtn(null); // Close the modal
        }
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center min-h-screen transition-opacity duration-300 ease-out bg-opacity-75 bg-base-300"
            onClick={handleOverlayClick} // Trigger close when clicking outside modal
        >
            <div
                className="mx-auto border border-gray-700 rounded-lg shadow-2xl bg-base-200 md:max-w-[500px] w-[90%] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()} // Prevent click inside the modal from closing it
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h2 className="text-lg font-bold text-center">Choose Your Theme</h2>
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-neutral"
                        aria-label="Close theme selector"
                        onClick={() => setClickedBtn(null)}
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className="max-h-[400px] p-4 overflow-y-auto">
                    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
                        {daisyThemes.map((theme) => (
                            <li key={theme}>
                                <button
                                    onClick={() => handleClick(theme)}
                                    type="button"
                                    data-theme={theme}
                                    className={`relative btn btn-lg h-28 w-full shadow-sm flex flex-col items-center justify-center rounded-lg p-4 space-y-2 
                                        border-2 transition-all duration-300 ease-in-out transform 
                                        ${theme === chosenTheme
                                            ? '!border-primary'
                                            : 'border-none'
                                        }`}
                                >
                                    <FaPalette className="mb-2 text-3xl" />
                                    <span className="font-semibold capitalize">{theme}</span>
                                    {theme === chosenTheme && (
                                        <div className="absolute top-0 flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-xl right-1">
                                            <FaCheck className="text-primary" size={15} />
                                        </div>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
