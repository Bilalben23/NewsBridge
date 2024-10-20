import React, { useEffect, useState } from 'react'
import SearchInput from '../components/SearchInput'
import { topics } from "../utils/Topics"
import { generateRandomNumber } from '../utils/generateRandomNumber'

export default function SearchResults() {
    const randomIndex = generateRandomNumber(topics.length);
    const [search, setSearch] = useState(() => {
        return topics[randomIndex - 1];
    })


    const endpoint = `everything?q="${search}"&language=en`;
    // const { data, isLoading, error } = useFetch(endpoint, [search]);

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className='w-[95%] md:w-[90%] mx-auto'>
            <SearchInput
                search={search}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            <div className=''>

            </div>

        </section>
    )
}
