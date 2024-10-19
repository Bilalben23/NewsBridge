import React, { useState } from 'react'
import CategoryFilter from '../components/CategoryFilter'

export default function CategoryPage() {

    const [selectedCategory, setSelectedCategory] = useState("general")

    function onSelectCategory(category) {
        setSelectedCategory(category)
    }
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
