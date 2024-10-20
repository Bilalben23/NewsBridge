import React, { useRef } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import BackTopBtn from './BackTopBtn'

export default function Layout() {
    const inputRef = useRef()
    function handleOnClick() {
        inputRef.current.focus()
    }
    return (
        <>
            <Header handleOnClick={handleOnClick} />
            <main className='my-24'>
                <Outlet />
            </main>
            <BackTopBtn />
            <Footer inputRef={inputRef} />
        </>
    )
}
