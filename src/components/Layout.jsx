import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
    return (
        <>
            <Header />
            <main className='my-20'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
