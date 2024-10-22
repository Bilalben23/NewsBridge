import React, { useState, useEffect } from 'react';
import { countries } from '../utils/countries';
import Flag from 'react-world-flags';
import { FaCheck, FaSearch, FaTimes } from 'react-icons/fa';

export default function CountrySelector({ setClickedBtn }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [chosenCountry, setChosenCountry] = useState(localStorage.getItem("selected_country") || "all");

    // Handle country selection
    function handleCountryClick(countryCode) {
        setChosenCountry(countryCode);
    }

    useEffect(() => {
        localStorage.setItem("selected_country", chosenCountry);
    }, [chosenCountry]);

    // Filter countries based on search term
    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Scroll to the top when the modal opens
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    // Close modal when clicking outside
    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            setClickedBtn(null);
        }
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center min-h-screen bg-opacity-75 bg-base-300"
            onClick={handleOverlayClick}
        >
            <div
                className='mx-auto border border-gray-700 rounded-lg shadow-2xl bg-base-200 md:max-w-[410px] w-full'
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex items-center justify-between p-4 border-b border-gray-700'>
                    <h2 className="text-lg font-bold text-center">Choose Country</h2>
                    <button
                        type="button"
                        className='btn btn-sm btn-circle btn-neutral'
                        aria-label="Close country selector"
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
                            placeholder='Search country...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <ul className='flex px-4 py-1 pb-4 flex-col space-y-2 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary no-scrollbar'>
                    {
                        filteredCountries.map(country => (
                            <li key={country.code}>
                                <button
                                    type="button"
                                    onClick={() => handleCountryClick(country.code)}
                                    className={`bg-base-100 btn btn-ghost btn-block justify-between h-[70px] ${country.code === chosenCountry && "bg-base-300"}`}
                                    disabled={!country.isAvailable}
                                >
                                    <div className='flex items-center space-x-2.5'>
                                        <Flag code={country.flagCode} className={`w-6 h-6 ${!country.isAvailable && "opacity-50"}`} />
                                        <span className="font-semibold capitalize text-md">{country.name}</span>
                                    </div>
                                    {
                                        country.code === chosenCountry && <FaCheck className='text-lg text-success' />
                                    }
                                </button>
                            </li>
                        ))
                    }
                    {
                        filteredCountries.length === 0 && <li className='p-2 text-center text-gray-500'>No countries found</li>
                    }
                </ul>
            </div>
        </div>
    );
}
