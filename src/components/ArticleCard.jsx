import React from 'react'
import { DateToHumanReadable } from '../utils/DateToHumanReadable'
import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {

    const readableDate = DateToHumanReadable(article.publishedAt) ?? ""

    return (
        <article className='flex flex-col justify-between pb-3 overflow-hidden font-semibold rounded shadow-lg bg-base-300'>
            <div>
                <div className='mb-2 text-black bg-gray-300'>
                    <img src={article.urlToImage ?? "https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg"}
                        loading='lazy'
                        alt={article.title}
                        draggable={false}
                        className='w-full aspect-[16/10]'
                    />
                </div>
                <div className='px-3'>
                    <div className='flex items-center justify-between mb-1'>
                        <p className='py-3 badge badge-outline badge-secondary max-w-1/2 badge-sm '>{article.source.name}</p>
                        <p className='py-3 font-thin text-opacity-70 badge badge-sm'>{readableDate}</p>
                    </div>
                    <div>
                        <p className='mb-2 text-sm font-bold line-clamp-3'>{article.title}</p>
                        <p className='text-xs font-thin line-clamp-2'>{article.description}</p>
                    </div>
                </div>
            </div>
            <div className='px-3 mt-4'>
                <Link to="/articleDetails" state={article} className='btn btn-primary btn-outline btn-sm'>
                    Read More
                </Link>
            </div>

        </article>
    )
}
