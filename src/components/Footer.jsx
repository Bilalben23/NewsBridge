import React from 'react'

export default function Footer() {
    const date = new Date()
    return (
        <footer className='py-5 bg-base-300'>
            <p>All right are reserved &copy; {date.getFullYear()}</p>
        </footer>
    )
}
