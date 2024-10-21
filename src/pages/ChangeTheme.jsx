import { useEffect, useState } from 'react';
import { daisyThemes } from '../utils/daisyThemes';
import { FaPalette, FaCheck } from 'react-icons/fa'; // Import icons

export default function ChangeTheme() {
    const [chosenTheme, setChosenTheme] = useState(() => localStorage.getItem("news_app_theme") || "night");

    function handleClick(theme) {
        setChosenTheme(theme);
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, []);

    useEffect(() => {
        // Save the theme in localStorage and set the HTML attribute whenever the theme changes
        localStorage.setItem("news_app_theme", chosenTheme);
        document.documentElement.setAttribute("data-theme", chosenTheme);
    }, [chosenTheme]);

    return (
        <div className="flex items-center justify-center bg-base-300 py-10 min-h-screen">
            <div className="w-[90%] max-w-5xl mx-auto p-8  rounded-lg">
                <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-tr from-primary to-secondary bg-clip-text">
                    Choose Your Theme
                </h1>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {daisyThemes.map((theme) => (
                        <li key={theme}>
                            <button
                                onClick={() => handleClick(theme)}
                                type="button"
                                data-theme={theme}
                                className={`relative btn btn-lg h-32 w-full shadow-sm flex flex-col items-center justify-center rounded-lg p-4 space-y-2 
                                    border-2 transition-all duration-300 ease-in-out transform 
                                    ${theme === chosenTheme
                                        ? '!border-primary'
                                        : 'border-none'
                                    }`}
                            >
                                <FaPalette className="text-3xl mb-2" />
                                <span className="font-semibold capitalize">{theme}</span>
                                {theme === chosenTheme && (
                                    <div className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-lg ">
                                        <FaCheck className="text-primary" />
                                    </div>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
