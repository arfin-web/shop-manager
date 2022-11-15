import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 sticky top-0 z-10">
                <div className="flex-1">
                    <Link href='/' className='cursor-pointer'><img src='/logo.png' className='w-16' alt='logo'></img></Link>
                </div>
                <div className="flex-none">
                    <button className="btn btn-primary text-lg">sign In</button>
                </div>
            </div>
        </>
    )
}

export default Navbar