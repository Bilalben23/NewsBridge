import { useState, useEffect } from 'react';
import { useFetch } from '../utils/api';
import ArticleCard from "../components/ArticleCard";
import ArticleCardSkeleton from '../skeletons/ArticleCardSkeleton';
import FetchError from '../components/FetchError';
import { FaNewspaper } from 'react-icons/fa';

export default function Home() {
    const endpoint = `top-headlines?country=us&language=en`;
    const { data, isLoading, error } = useFetch(endpoint);
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
            behavior: 'instant'
        });
    }, [])

    if (error) {
        return <FetchError error={error} />;
    }

    return (
        <section>
            <div className="flex items-center justify-center mb-7">
                <FaNewspaper className="mr-2 text-3xl text-primary" /> {/* Icon */}
                <h1 className='text-3xl font-semibold text-transparent bg-gradient-to-tr from-primary to-secondary bg-clip-text'>
                    Breaking News
                </h1>
            </div>
            <div className='w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>

                {
                    showSkeletons && Array(14).fill().map((_, index) => <ArticleCardSkeleton key={index} />)
                }
                {
                    !showSkeletons && !isLoading && data?.articles?.length === 0 && <div className="flex flex-col items-center justify-center mt-10 col-span-full">
                        <p className="text-lg font-semibold text-gray-600">No breaking news found!</p>
                        <FaNewspaper className="mt-4 text-5xl text-gray-400" />
                    </div>
                }
                {
                    !isLoading && data?.articles?.length > 0
                    && data?.articles?.map((article, index) => <ArticleCard key={index} article={article} />)
                }
            </div>
        </section>
    );
}
