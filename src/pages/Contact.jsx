import { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane, FaUser, FaEnvelope, FaCommentDots, FaGlobe } from 'react-icons/fa';

export default function Contact() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        })
    }, [])

    return (
        <section className='w-[95%] md:w-[80%] mx-auto my-10'>
            <h1 className='relative flex items-center justify-center mb-5 space-x-2 text-3xl font-bold text-center'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
                    Get in Touch
                </span>
            </h1>
            <p className='mb-10 text-center'>
                We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
            </p>

            <form className='px-8 pt-6 pb-8 mb-4 rounded shadow-md bg-base-300'>
                <div className='flex items-center gap-2 mb-4 input input-bordered input-primary'>
                    <FaUser className='text-primary' />
                    <input
                        className='w-full'
                        id='name'
                        placeholder='Name...'
                        required
                    />
                </div>
                <div className='flex items-center gap-2 mb-4 input input-primary input-bordered'>
                    <FaEnvelope className='text-primary' />
                    <input
                        className='w-full'
                        type='email'
                        placeholder='Email...'
                        id='email'
                        required
                    />
                </div>
                <div className='flex items-start gap-2 mb-4 textarea textarea-primary textarea-bordered'>
                    <FaCommentDots className='mt-1 text-primary' />
                    <textarea
                        className="w-full bg-transparent outline-none max-h-[350px] resize-y"
                        id='message'
                        placeholder='Message...'
                        rows='5'
                        required></textarea>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='flex items-center justify-center gap-2 btn btn-outline btn-primary' type='submit'>
                        <FaPaperPlane />
                        Send Message
                    </button>
                </div>
            </form>

            <div className='p-8 mt-10 text-center text-white rounded-lg shadow-lg bg-gradient-to-tr from-base-300 to-blue-950'>
                <div className='flex justify-center mb-4'>
                    <FaGlobe size={40} className='text-white' />
                </div>
                <h2 className='mb-4 text-2xl font-bold'>
                    We are active on social media, don't forget to follow us!
                </h2>
                <p className='mb-8 italic'>Join our community and stay updated with the latest news!</p>
                <div className='flex justify-center space-x-6'>
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='transition-transform transform hover:scale-110 tooltip'
                        data-tip="Facebook">
                        <FaFacebook size={40} className='text-blue-600 hover:text-blue-800' />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='transition-transform transform hover:scale-110 tooltip'
                        data-tip="Twitter">
                        <FaTwitter size={40} className='text-blue-400 hover:text-blue-600' />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='transition-transform transform hover:scale-110 tooltip'
                        data-tip="Instagram">
                        <FaInstagram size={40} className='text-pink-600 hover:text-pink-800' />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='transition-transform transform hover:scale-110 tooltip'
                        data-tip="LinkedIn">
                        <FaLinkedin size={40} className='text-blue-700 hover:text-blue-900' />
                    </a>
                </div>
            </div>
        </section>
    );
}