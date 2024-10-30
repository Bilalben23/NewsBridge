import React, { useEffect, useState } from 'react';
import { languageOptions } from '../utils/languageOptions ';
import Flag from 'react-world-flags';
import { FaCheck, FaGlobe, FaSearch, FaTimes } from 'react-icons/fa';

export default function LanguageSelector({ setClickedBtn }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [chosenLanguage, setChosenLanguage] = useState(localStorage.getItem("news_language") || "all");

    function handleLanguageClick(language) {
        setChosenLanguage(language);
    }

    useEffect(() => {
        localStorage.setItem("news_language", chosenLanguage);
    }, [chosenLanguage]);

    const filteredLanguages = languageOptions.filter(language =>
        language.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }, []);

    // Handle modal close when clicking outside
    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            setClickedBtn(null);
        }
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center min-h-screen bg-opacity-75 bg-base-300"
            onClick={handleOverlayClick} // Close when clicking outside
        >
            <div
                className='mx-auto border border-gray-700 rounded-lg shadow-2xl bg-base-200 md:max-w-[410px] w-full'
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <div className='flex items-center justify-between p-4 border-b border-gray-700'>
                    <h2 className="text-lg font-bold text-center">Choose News Language </h2>
                    <button
                        type="button"
                        className='btn btn-sm btn-circle btn-neutral'
                        aria-label="Close language selector"
                        onClick={() => setClickedBtn(null)}
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className='p-4 mb-4'>
                    <div className='flex items-center p-4 space-x-2.5 shadow-md shadow-gray-800 input input-bordered input-primary '>
                        <FaSearch className='text-primary' size={25} />
                        <input
                            type="text"
                            className='w-full capitalize bg-transparent outline-none'
                            placeholder='Search language...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <ul className='flex px-4 py-1 pb-4 flex-col space-y-2 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary no-scrollbar'>
                    {
                        filteredLanguages.map(language => (
                            <li key={language.code}>
                                <button
                                    type="button"
                                    onClick={() => handleLanguageClick(language.code)}
                                    className={`bg-base-100 btn btn-ghost btn-block justify-between h-[70px] ${language.code === chosenLanguage && "bg-base-300"}`}
                                    disabled={!language.isAvailable}
                                >
                                    <div className='flex items-center space-x-2.5'>
                                        {
                                            language.code === "all"
                                                ? <FaGlobe className={`text-2xl text-primary ${!language.isAvailable && "opacity-50"}`} />
                                                : <Flag code={language.flagCode} className={`w-6 h-6 ${!language.isAvailable && "opacity-50"}`} />
                                        }
                                        <span className="font-semibold capitalize text-md">{language.name}</span>
                                    </div>
                                    {
                                        language.code === chosenLanguage && <FaCheck className='text-lg text-success' />
                                    }
                                </button>
                            </li>
                        ))
                    }
                    {
                        filteredLanguages.length === 0 && <li className='p-2 text-center text-gray-500'>No languages found</li>
                    }
                </ul>
            </div>
        </div>
    );
}
