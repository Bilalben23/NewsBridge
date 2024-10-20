import React, { useEffect } from 'react';
import { FaUserFriends, FaBullhorn, FaClipboardList, FaStar, FaNewspaper, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AboutUs() {


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        })
    }, [])


    return (
        <section className='w-[95%] md:w-[90%] lg:w-[85%] mx-auto my-8'>
            <h1 className='mb-6 text-4xl font-bold text-center text-transparent bg-gradient-to-tr from-primary to-secondary bg-clip-text'>About Us</h1>
            <div className='w-[90%] mx-auto'>
                <img
                    src='https://img.freepik.com/premium-vector/session-impact-unconscious-bias-decisionmaking-how-combat-it-through-diversity_216520-34918.jpg'
                    alt="Our Team"
                    className="w-full mb-6 rounded-lg shadow-lg"
                />
                <p className='mb-8 text-lg text-center'>
                    Welcome to our platform! We are dedicated to providing you with the latest news and insights across various categories, including technology, health, finance, and more.
                </p>
            </div>

            <h2 className='mb-4 text-3xl font-semibold text-center text-transparent text-blue-500 bg-gradient-to-r from-primary to-secondary bg-clip-text'>Our Mission</h2>
            <p className='mb-6 text-lg text-center'>
                Our mission is to empower individuals by delivering accurate and timely information that enriches their lives. We aggregate news from multiple trusted sources to ensure you receive a comprehensive view of current events.
            </p>

            <h2 className='mb-4 text-3xl font-semibold text-center text-transparent text-blue-500 bg-gradient-to-tr from-primary to-secondary bg-clip-text'>Why We Aggregate</h2>
            <p className='mb-6 text-lg text-center'>
                In today's fast-paced world, staying informed is crucial. By bringing together articles from various reputable sources, we aim to provide our readers with diverse perspectives and well-rounded insights.
            </p>

            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 text-center transition-shadow duration-300 border rounded-lg shadow-md hover:shadow-lg hover:border-primary">
                    <FaNewspaper className='mx-auto mb-2 text-4xl text-blue-500' />
                    <h3 className='text-xl font-semibold'>Trusted Sources</h3>
                    <p className='text-sm text-gray-600'>
                        We gather information from reputable publications, ensuring reliability and accuracy in our news coverage.
                    </p>
                </div>
                <div className="p-4 text-center transition-shadow duration-300 border rounded-lg shadow-md hover:shadow-lg hover:border-primary">
                    <FaBullhorn className='mx-auto mb-2 text-4xl text-blue-500' />
                    <h3 className='text-xl font-semibold'>Real-Time Updates</h3>
                    <p className='text-sm text-gray-600'>
                        Stay updated with breaking news and insights as events unfold across the globe, all curated for you.
                    </p>
                </div>
                <div className="p-4 text-center transition-shadow duration-300 border rounded-lg shadow-md hover:shadow-lg hover:border-primary">
                    <FaClipboardList className='mx-auto mb-2 text-4xl text-blue-500' />
                    <h3 className='text-xl font-semibold'>Diverse Perspectives</h3>
                    <p className='text-sm text-gray-600'>
                        Our curated content presents multiple viewpoints to give you a comprehensive understanding of the news.
                    </p>
                </div>
            </div>

            <h2 className='mb-4 text-3xl font-semibold text-center text-transparent text-blue-500 bg-gradient-to-tr from-primary to-secondary bg-clip-text'>Meet the Team</h2>
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 text-center transition-shadow duration-300 border rounded-lg shadow-md hover:shadow-lg hover:border-primary">
                    <FaUserFriends className='mx-auto mb-2 text-4xl text-blue-500' />
                    <h3 className='text-xl font-semibold'>Our Experts</h3>
                    <p className='text-sm text-gray-600'>
                        A dedicated team of journalists and editors committed to integrity and insightful reporting.
                    </p>
                </div>
                <div className="p-4 text-center transition-shadow duration-300 border rounded-lg shadow-md hover:shadow-lg hover:border-primary">
                    <FaStar className='mx-auto mb-2 text-4xl text-blue-500' />
                    <h3 className='text-xl font-semibold'>Our Vision</h3>
                    <p className='text-sm text-gray-600'>
                        To become the go-to platform for accurate news and diverse perspectives in an ever-changing world.
                    </p>
                </div>
                <div className="p-4 text-center transition-shadow duration-300 border rounded-lg shadow-md hover:shadow-lg hover:border-primary">
                    <FaStar className='mx-auto mb-2 text-4xl text-blue-500' />
                    <h3 className='text-xl font-semibold'>Our Values</h3>
                    <p className='text-sm text-gray-600'>
                        Integrity, transparency, and accuracy guide our commitment to journalism.
                    </p>
                </div>
            </div>

            <h2 className='mb-4 text-3xl font-semibold text-center text-transparent text-blue-500 bg-gradient-to-tr from-primary to-secondary bg-clip-text'>Join Our Community</h2>
            <p className='mb-6 text-lg text-center'>
                We believe in the power of community. Share your thoughts, feedback, and ideas with us to help shape our platform.
            </p>
            <div className='flex justify-center'>
                <Link to="/contact" className='transition-colors duration-300 btn btn-outline rounded-3xl btn-primary'>
                    <FaEnvelope />
                    Contact Us
                </Link>
            </div>

        </section>
    );
}
