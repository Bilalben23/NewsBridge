import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import BackTopBtn from './BackTopBtn'

export default function Layout() {
    const inputRef = useRef()


    function handleOnClick() {
        inputRef.current.focus()
    }

    useEffect(() => {
        // Retrieve the theme from localStorage or use "night" as the default if none is set
        const storedTheme = localStorage.getItem("news_app_theme");
        const theme = storedTheme ? storedTheme : "night";

        // Apply the theme to the HTML document element
        document.documentElement.setAttribute('data-theme', theme);
    }, []);


    return (
        <>
            <Header handleOnClick={handleOnClick} />
            <main className='my-20 md:my-24'>
                <Outlet />
            </main>
            <BackTopBtn />
            <Footer inputRef={inputRef} />
        </>
    )
}

