import React from 'react'
import { FaSearch } from 'react-icons/fa';

export default function SearchInput({ search, handleChange, handleSubmit }) {



    return (
        <form className='flex items-center space-x-2 mx-auto max-w-sm' onSubmit={handleSubmit}>
            <div className='input input-bordered input-secondary flex items-center space-x-2 w-full bg-base-300'>
                <FaSearch className='text-secondary' />
                <input
                    type="text"
                    value={search}
                    className='text-sm w-full capitalize'
                    placeholder='Search for something...'
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="submit" className='btn btn-outline btn-secondary'>Search</button>
            </div>
        </form>
    )
}
