import React from 'react'

const profile = () => {
    return (
        <>
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
                                            <td className='text-lg font-bold'>Name:</td>
                                            <td className='text-lg'>Alexa Nt</td>
                                        </tr>
                                        <tr>
                                            <td className='text-lg font-bold'>Email:</td>
                                            <td className='text-lg'>alexa@mail.com</td>
                                        </tr>
                                        <tr>
                                            <td className='text-lg font-bold'>Phone:</td>
                                            <td className='text-lg'>+88017458634</td>
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