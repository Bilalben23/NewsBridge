import React from 'react';
import { CATEGORIES } from '../utils/Categories';

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {

    return (
        <div className="w-[90%] overflow-x-auto flex flex-wrap justify-center gap-4 mx-auto my-5">
            {
                CATEGORIES.map((category) => (
                    <button
                        key={category.value}
                        onClick={() => onSelectCategory(category.value)}
                        className={`btn btn-sm md:btn-md btn-primary rounded-3xl 
                        ${selectedCategory === category.value ? 'btn-primary' : 'btn-outline'}`}
                    >
                        {<category.icon />}
                        {category.name}
                    </button>
                ))}
        </div>
    );
}
