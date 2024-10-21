import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useFetch } from '../utils/api';
import ArticleCard from "../components/ArticleCard";
import ArticleCardSkeleton from '../skeletons/ArticleCardSkeleton';
import FetchError from '../components/FetchError';
import { FaNewspaper } from 'react-icons/fa';

export default function Home() {
    const endpoint = "top-headlines?country=us&language=en";
    const { data, isLoading, error } = useFetch(endpoint, []);
    const [showSkeletons, setShowSkeletons] = useState(true);

    useEffect(() => {
        if (isLoading) {
            setShowSkeletons(true);
        } else {
            setShowSkeletons(false);
        }
    }, [isLoading]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }, [])

    if (error) {
        return <FetchError error={error} />;
    }

    return (
        <section>
            <div className="flex items-center justify-center mb-5">
                <FaNewspaper className="mr-2 text-3xl text-primary" /> {/* Icon */}
                <h1 className='text-3xl font-semibold text-transparent bg-gradient-to-tr from-primary to-secondary bg-clip-text'>
                    Breaking News
                </h1>
            </div>            <div className='w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>

                {
                    showSkeletons && Array(14).fill().map((_, index) => <ArticleCardSkeleton key={index} />)
                }
                {
                    !isLoading && data && data?.articles?.length > 0
                        ? data?.articles?.map((article, index) => <ArticleCard key={index} article={article} />)
                        : <div>
                            <p>No breaking news found!</p>
                        </div>
                }
            </div>
        </section>
    );
}



// https://newsapi.org/v2/top-headlines/sources?apiKey=60faad1b29e54d2398a084a52ddd2f2c => get resources: