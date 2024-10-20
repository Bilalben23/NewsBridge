import React, { useState } from 'react'
import CategoryFilter from '../components/CategoryFilter'
import { useFetch } from '../utils/api';

export default function CategoryPage() {

    const [selectedCategory, setSelectedCategory] = useState("general");

    const endpoint = `top-headlines/sources?category=${selectedCategory}`;
    const { data, isLoading, error } = useFetch(endpoint, [selectedCategory])


    function onSelectCategory(category) {
        setSelectedCategory(category)
    }

    console.log(data);



    return (
        <section>
            <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory}
            />
            <div>

            </div>

        </section>
    )
}
