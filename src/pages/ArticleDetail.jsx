import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DateToHumanReadable } from '../utils/DateToHumanReadable';
import { FaChevronLeft } from 'react-icons/fa';

export default function ArticleDetail() {

    const location = useLocation();
    const article = location.state;
    const navigate = useNavigate()

    const readableDate = DateToHumanReadable(article.publishedAt) ?? ""


    function handleGoBackClick() {
        navigate(-1)
    }



    useEffect(() => {
        scrollTo({
            top: 0,
            behavior: "instant"
        })
    }, [])

    return (
        <section className='w-[95%] p-5 md:w-[70%] lg:w-[60%] mx-auto font-semibold rounded shadow-lg bg-base-300'>
            <button type="button" className='mb-4 rounded-full btn btn-outline btn-secondary' onClick={handleGoBackClick}>
                <FaChevronLeft />
                Go Back
            </button>
            <article className='w-full'>

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
                            <p className='py-3 mb-4 badge badge-outline badge-secondary max-w-1/2 '>{article.source.name}</p>
                            <p className='py-3 text-opacity-70 badge'>{readableDate}</p>
                        </div>
                        <div>
                            <p className='mb-2 text-lg font-bold'>{article.title}</p>
                            <p className='text-sm'>{article.content}</p>
                        </div>
                    </div>
                </div>
                <div className='px-3 mt-4'>
                    <a href={article.url} target='_blank' className='btn btn-primary btn-outline btn-sm'>
                        Read Full Article
                    </a>
                </div>

            </article>
        </section>
    )
}
