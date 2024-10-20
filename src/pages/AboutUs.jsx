import React from 'react';
import { FaUserFriends, FaBullhorn, FaClipboardList, FaStar, FaNewspaper, FaEnvelope } from 'react-icons/fa';
import teamImage from '../../public/assets/team.png'; // Ensure you have an image in your assets folder
import { Link } from 'react-router-dom';

export default function AboutUs() {
    return (
        <section className='w-[95%] md:w-[90%] lg:w-[85%] mx-auto my-8'>
            <h1 className='text-4xl font-bold text-center mb-6 text-blue-600'>About Us</h1>
            <div className='w-[90%] mx-auto'>
                <img
                    src={teamImage}
                    alt="Our Team"
                    className="w-full max-h-80 md:max-h-64 object-cover rounded-lg shadow-lg mb-6"
                />
                <p className='text-lg text-center mb-8'>
                    Welcome to our platform! We are dedicated to providing you with the latest news and insights across various categories, including technology, health, finance, and more.
                </p>
            </div>

            <h2 className='text-3xl font-semibold mb-4 text-blue-500 text-center'>Our Mission</h2>
            <p className='text-lg mb-6 text-center'>
                Our mission is to empower individuals by delivering accurate and timely information that enriches their lives. We aggregate news from multiple trusted sources to ensure you receive a comprehensive view of current events.
            </p>

            <h2 className='text-3xl font-semibold mb-4 text-blue-500 text-center'>Why We Aggregate</h2>
            <p className='text-lg mb-6 text-center'>
                In today's fast-paced world, staying informed is crucial. By bringing together articles from various reputable sources, we aim to provide our readers with diverse perspectives and well-rounded insights.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="border rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow duration-300 hover:border-primary">
                    <FaNewspaper className='text-4xl text-blue-500 mb-2' />
                    <h3 className='text-xl font-semibold'>Trusted Sources</h3>
                    <p className='text-sm text-gray-600'>
                        We gather information from reputable publications, ensuring reliability and accuracy in our news coverage.
                    </p>
                </div>
                <div className="border rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow duration-300 hover:border-primary">
                    <FaBullhorn className='text-4xl text-blue-500 mb-2' />
                    <h3 className='text-xl font-semibold'>Real-Time Updates</h3>
                    <p className='text-sm text-gray-600'>
                        Stay updated with breaking news and insights as events unfold across the globe, all curated for you.
                    </p>
                </div>
                <div className="border rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow duration-300 hover:border-primary">
                    <FaClipboardList className='text-4xl text-blue-500 mb-2' />
                    <h3 className='text-xl font-semibold'>Diverse Perspectives</h3>
                    <p className='text-sm text-gray-600'>
                        Our curated content presents multiple viewpoints to give you a comprehensive understanding of the news.
                    </p>
                </div>
            </div>

            <h2 className='text-3xl font-semibold mb-4 text-blue-500 text-center'>Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="border rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow duration-300 hover:border-primary">
                    <FaUserFriends className='text-4xl text-blue-500 mb-2' />
                    <h3 className='text-xl font-semibold'>Our Experts</h3>
                    <p className='text-sm text-gray-600'>
                        A dedicated team of journalists and editors committed to integrity and insightful reporting.
                    </p>
                </div>
                <div className="border rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow duration-300 hover:border-primary">
                    <FaStar className='text-4xl text-blue-500 mb-2' />
                    <h3 className='text-xl font-semibold'>Our Vision</h3>
                    <p className='text-sm text-gray-600'>
                        To become the go-to platform for accurate news and diverse perspectives in an ever-changing world.
                    </p>
                </div>
                <div className="border rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow duration-300 hover:border-primary">
                    <FaStar className='text-4xl text-blue-500 mb-2' />
                    <h3 className='text-xl font-semibold'>Our Values</h3>
                    <p className='text-sm text-gray-600'>
                        Integrity, transparency, and accuracy guide our commitment to journalism.
                    </p>
                </div>
            </div>

            <h2 className='text-3xl font-semibold mb-4 text-blue-500 text-center'>Join Our Community</h2>
            <p className='text-lg mb-6 text-center'>
                We believe in the power of community. Share your thoughts, feedback, and ideas with us to help shape our platform.
            </p>
            <div className='flex justify-center'>
                <Link to="/contact" className='btn btn-outline rounded-3xl btn-primary transition-colors duration-300'>
                    <FaEnvelope />
                    Contact Us
                </Link>
            </div>

        </section>
    );
}
