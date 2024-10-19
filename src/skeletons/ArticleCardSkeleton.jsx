import React from 'react'

export default function ArticleCardSkeleton() {
    return (
        <div className='pb-3 overflow-hidden rounded shadow-lg select-none bg-base-300'>
            <div>
                <div className='skeleton aspect-[16/10] bg-slate-800 rounded-none'></div>
            </div>
            <div className='px-3'>
                <div className='flex items-center justify-between mt-2'>
                    <p className='px-10 py-3 badge skeleton bg-slate-800'></p>
                    <p className='px-7 badge skeleton bg-slate-800'></p>
                </div>
                <div className='mt-3'>
                    <p className='w-full py-3 skeleton bg-slate-800'></p>
                    <p className='w-3/4 py-3 mt-1.5 skeleton bg-slate-800'></p>
                </div>
                <div className='mt-3'>
                    <p className='w-full py-2 skeleton bg-slate-800'></p>
                    <p className='w-[95%] py-2 mt-1 skeleton bg-slate-800'></p>
                </div>
                <div className='mt-3'>
                    <p className='w-2/5 py-4 skeleton bg-slate-800'></p>
                </div>
            </div>
        </div>
    )
}
