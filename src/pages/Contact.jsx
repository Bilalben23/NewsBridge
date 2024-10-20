import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane, FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

export default function Contact() {
    return (
        <section className='w-[95%] md:w-[80%] mx-auto my-10'>
            <h1 className='text-3xl font-bold text-center mb-5 flex items-center justify-center relative space-x-2'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                    Get in Touch
                </span>
            </h1>
            <p className='text-center mb-10'>
                We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
            </p>

            <form className='shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-base-300'>
                <div className='mb-4 flex items-center gap-2 input input-bordered input-primary'>
                    <FaUser className='text-primary' />
                    <input
                        className='w-full'
                        id='name'
                        placeholder='Name...'
                        required
                    />
                </div>
                <div className='mb-4 flex items-center gap-2 input input-primary input-bordered'>
                    <FaEnvelope className='text-primary' />
                    <input
                        className='w-full'
                        type='email'
                        placeholder='Email...'
                        id='email'
                        required
                    />
                </div>
                <div className='mb-4 flex items-start textarea textarea-primary textarea-bordered gap-2'>
                    <FaCommentDots className='text-primary mt-1' />
                    <textarea
                        className="w-full bg-transparent outline-none"
                        id='message'
                        placeholder='Message...'
                        rows='4'
                        required></textarea>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='btn btn-outline btn-primary flex items-center justify-center gap-2' type='submit'>
                        <FaPaperPlane />
                        Send Message
                    </button>
                </div>
            </form>

            <div className='flex justify-center space-x-4 mt-10'>
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-blue-600 hover:text-blue-800 tooltip'
                    data-tip="Facebook">
                    <FaFacebook size={30}
                    />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-blue-400 hover:text-blue-600 tooltip'
                    data-tip="Twitter">
                    <FaTwitter size={30} />
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-pink-600 hover:text-pink-800 tooltip'
                    data-tip="Instagram"
                >
                    <FaInstagram size={30} />
                </a>
                <a
                    href="https://www.linkedin.com" target="_blank"
                    rel="noopener noreferrer" className='text-blue-700 hover:text-blue-900 tooltip'
                    data-tip="Linkden">
                    <FaLinkedin size={30} />
                </a>
            </div>
        </section>
    );
}
