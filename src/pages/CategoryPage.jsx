import React, { useState, useEffect, useLayoutEffect } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import { useFetch } from '../utils/api';
import ArticleCard from '../components/ArticleCard';
import ArticleCardSkeleton from '../skeletons/ArticleCardSkeleton';

export default function CategoryPage() {
    const [selectedCategory, setSelectedCategory] = useState('general');
    const [showSkeletons, setShowSkeletons] = useState(true);

    // Fetch data based on the selected category
    const endpoint = `top-headlines?category=${selectedCategory}&language=en&sortBy=publishedAt`;
    const { data, isLoading, error } = useFetch(endpoint, [selectedCategory]);

    // Manage skeleton display based on loading state
    useEffect(() => {
        setShowSkeletons(isLoading);
    }, [isLoading]);

    // Handle category selection
    const onSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }, [])

    if (error) {
        return (
            <div className='p-5 text-center'>
                <h1 className='text-red-500 text-2xl'>{error}</h1>
            </div>
        );
    }

    return (
        <section className="w-[95%] md:w-[85%] lg:w-[80%] mx-auto my-8">
            {/* Category Filter Component */}
            <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    showSkeletons && Array(14).fill().map((_, index) => (
                        <ArticleCardSkeleton key={index} />
                    ))
                }

                {
                    !isLoading && data?.articles?.length > 0 && (
                        data.articles.map((article, index) => (
                            <ArticleCard key={index} article={article} />
                        ))
                    )
                }

                {
                    !isLoading && data?.articles?.length === 0 && (
                        <div className="col-span-full text-center text-gray-500">
                            No articles found for this category.
                        </div>
                    )
                }
            </div>
        </section>
    );
}
