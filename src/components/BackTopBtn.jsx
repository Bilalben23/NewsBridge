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
            behavior: 'auto'
        });
    };

    return (
        <>
            {!isHidden && (
                <div className='fixed bottom-2 right-2 z-10'>
                    <button
                        type="button"
                        className='btn btn-circle btn-primary btn-sm btn-outline shadow-lg'
                        onClick={handleBtnClick}
                    >
                        <FaChevronUp />
                    </button>
                </div>
            )}
        </>
    );
}
