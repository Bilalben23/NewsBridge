import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default function BackTopBtn() {
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= innerHeight) {
                setIsHidden(false);
            } else {
                setIsHidden(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleBtnClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {!isHidden && (
                <div className='fixed z-10 bottom-2 right-2'>
                    <button
                        type="button"
                        className='shadow-lg btn btn-circle btn-primary btn-sm btn-outline'
                        onClick={handleBtnClick}
                    >
                        <FaChevronUp />
                    </button>
                </div>
            )}
        </>
    );
}
