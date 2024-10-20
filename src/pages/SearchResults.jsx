import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';
import { topics } from "../utils/Topics";
import { generateRandomNumber } from '../utils/generateRandomNumber';
import { useFetch } from '../utils/api';
import ArticleCard from '../components/ArticleCard';
import ArticleCardSkeleton from '../skeletons/ArticleCardSkeleton';

export default function SearchResults() {
    const randomIndex = generateRandomNumber(topics.length);
    const [searchTerm, setSearchTerm] = useState(topics[randomIndex]);
    const [search, setSearch] = useState(searchTerm);

    // Triggering the API request only when the search term changes
    const endpoint = `everything?q="${search}"&language=en&sortBy=publishedAt&searchIn=title,description`;
    const { data, isLoading, error } = useFetch(endpoint, [search]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value.trimStart());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim() && searchTerm.trim().toLowerCase() !== search.toLowerCase()) {
            setSearch(searchTerm);
        }
    };

    if (error) {
        return (
            <div className='p-5 text-center'>
                <h1 className='text-red-500 text-2xl'>{error}</h1>
            </div>
        );
    }

    return (
        <section className='w-[95%] md:w-[90%] mx-auto'>
            <SearchInput
                search={searchTerm}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    isLoading && (
                        Array.from({ length: 14 }).map((_, index) => (
                            <ArticleCardSkeleton key={index} />
                        ))
                    )
                }
                {
                    !isLoading && data && data.articles?.length > 0 ? (
                        data.articles.map((article, index) => (
                            <ArticleCard key={index} article={article} />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500">
                            No articles found for this search.
                        </div>
                    )
                }
            </div>
        </section>
    );
}
