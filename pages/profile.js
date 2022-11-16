import React from 'react'
import Head from 'next/head'

const profile = () => {
    return (
        <>
            <Head>
                <title>Shop Manager</title>
                <meta name="description" content="Shop Manager" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='container mx-auto p-4 flex justify-center align-center'>
                <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <div className="avatar mb-4">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="overflow-x-auto mb-4">
                                <table className="table w-full">
                                    <tbody>
                                        <tr>
                                            <td className='text-lg text-primary font-bold'>Name:</td>
                                            <td className='text-lg text-primary'>Alexa Nt</td>
                                        </tr>
                                        <tr>
                                            <td className='text-lg text-primary font-bold'>Email:</td>
                                            <td className='text-lg text-primary'>alexa@mail.com</td>
                                        </tr>
                                        <tr>
                                            <td className='text-lg text-primary font-bold'>Phone:</td>
                                            <td className='text-lg text-primary'>+88017458634</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <button className="btn btn-primary">Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default profile