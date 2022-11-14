import React from 'react'

const Help = () => {
    return (
        <>
            <div className='mx-4 my-4 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className=''>
                    <h1 className='text-4xl text-primary font-bold mb-10'>Stay <span className='text-secondary'>With Us</span></h1>
                    <form className='flex flex-col'>
                        <input type="text" placeholder="Your Name" className="input input-bordered input-primary w-full mb-8" />
                        <input type="email" placeholder="Your Email" className="input input-bordered input-primary w-full mb-8" />
                        <textarea className="textarea textarea-primary mb-8" placeholder="Your Message"></textarea>
                        <button className="btn btn-primary">Send</button>
                    </form>
                </div>
                <figure className='glass p-2 rounded-xl order-first lg:order-last'>
                    <img src='/help.svg' className='h-full rounded-lg' alt='Help' />
                </figure>
            </div>
        </>
    )
}

export default Help