import React, { useEffect, useState } from 'react';
import SearchInput from '../components/SearchInput';
import { topics } from "../utils/Topics";
import { generateRandomNumber } from '../utils/generateRandomNumber';
import { useFetch } from '../utils/api';
import ArticleCard from '../components/ArticleCard';
import ArticleCardSkeleton from '../skeletons/ArticleCardSkeleton';
import FetchError from '../components/FetchError';
import { FaSearch } from 'react-icons/fa'; // Icon for search

export default function SearchResults() {
    const randomIndex = generateRandomNumber(topics.length);
    const [searchTerm, setSearchTerm] = useState(topics[randomIndex]);
    const [search, setSearch] = useState(searchTerm);
    const [showSkeletons, setShowSkeletons] = useState(true); // State to control skeleton visibility

    // Triggering the API request only when the search term changes
    const endpoint = `everything?q="${search}"&language=en&sortBy=publishedAt&searchIn=title,description`;
    const { data, isLoading, error } = useFetch(endpoint, [search]);

    // Update skeleton visibility based on loading state
    useEffect(() => {
        setShowSkeletons(isLoading);
    }, [isLoading]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value.trimStart());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim() && searchTerm.trim().toLowerCase() !== search.toLowerCase()) {
            setSearch(searchTerm);
        }
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    if (error) {
        return <FetchError error={error} />;
    }

    return (
        <section className='w-[95%] md:w-[90%] mx-auto'>
            <div className="flex items-center justify-center space-x-1 mb-7">
                <FaSearch className="mr-2 text-2xl text-primary" />
                <h1 className='text-3xl font-semibold text-transparent bg-gradient-to-tr from-primary to-secondary bg-clip-text'>
                    Search Results
                </h1>
            </div>

            <SearchInput
                search={searchTerm}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />

            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
                {
                    showSkeletons && Array(14).fill().map((_, index) => (
                        <ArticleCardSkeleton key={index} />
                    ))
                }
                {
                    !showSkeletons && data?.articles?.length === 0 && (
                        <div className="text-center text-gray-500 col-span-full">
                            No articles found for this search.
                        </div>
                    )
                }
                {
                    !showSkeletons && data?.articles?.length > 0 &&
                    data.articles.map((article, index) => (
                        <ArticleCard key={index} article={article} />
                    ))
                }
            </div>
        </section>
    );
}
