import React, { useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function FetchError({ error }) {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }, [])
    return (
        <div className="flex items-center justify-center p-6 py-10 mx-auto text-transparent transition-all duration-300 border border-red-600 rounded-lg shadow-xl my-14 bg-gradient-to-tr from-red-900 to-red-600 bg-clip-text md:w-1/2 bg-base-800 hover:shadow-2xl">
            <FaExclamationTriangle className="mr-6 text-4xl text-red-400 md:text-5xl animate-bounce" />
            <div className="text-left">
                <h2 className="text-xl font-extrabold md:text-2xl">Oops! Something went wrong!</h2>
                <p className="mt-2 text-lg capitalize">{error}</p>
            </div>
        </div>
    );
}
