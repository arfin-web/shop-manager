import Link from 'next/link'
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <>
            <div className="navbar bg-base-100 sticky top-0 z-10">
                <div className="flex-1">
                    <Link href='/' className='cursor-pointer'><img src='/logo.png' className='w-16' alt='logo'></img></Link>
                </div>
                <div className="flex-none">
                    {
                        isAuthenticated ? <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.picture} alt='proPic' />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link href='/dashboard' className="justify-between">
                                            Dashboard
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><a>{user.name}</a></li>
                                    <li><a>{user.email}</a></li>
                                    <li><button onClick={() => logout({ returnTo: window.location.origin })} className="btn btn-secondary">Log Out</button></li>
                                </ul>
                            </div>
                        </>
                            : <button onClick={() => loginWithRedirect()} className="btn btn-primary text-lg">sign In</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar