import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
    useEffect(() => {
        scrollTo({
            top: 0,
            behavior: "instant"
        })
    })
    return (
        <div className="flex flex-col items-center justify-center p-6 py-10 text-center bg-base-200">
            <h1 className="mb-4 text-6xl font-bold text-primary animate-bounce">404</h1>
            <h2 className="mb-2 text-2xl font-semibold text-gray-400">
                Oops! The page you're looking for doesn't exist.
            </h2>
            <p className="mb-6 text-gray-500">
                It seems you may have taken a wrong turn. Let's get you back on track!
            </p>
            <Link
                to="/"
                className="btn btn-primary btn-outline rounded-3xl"
            >
                <FaHome />
                Go Back Home
            </Link>
        </div>
    );
}
