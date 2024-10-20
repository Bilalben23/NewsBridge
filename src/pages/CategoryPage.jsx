import React, { useState, useEffect, useLayoutEffect } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import { useFetch } from '../utils/api';
import ArticleCard from '../components/ArticleCard';
import ArticleCardSkeleton from '../skeletons/ArticleCardSkeleton';
import FetchError from '../components/FetchError';

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
        return <FetchError error={error} />;
    }

    return (
        <section className="w-[95%] md:w-[85%] lg:w-[80%] mx-auto my-8">
            {/* Category Filter Component */}
            <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} />

            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
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
                        <div className="text-center text-gray-500 col-span-full">
                            No articles found for this category.
                        </div>
                    )
                }
            </div>
        </section>
    );
}
