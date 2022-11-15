import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Hero = () => {
    const { loginWithRedirect, logout } = useAuth0();
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold text-primary">THE #1 AUTOMOTIVE SHOP <span className='text-secondary'>MANAGEMENT SOFTWARE</span></h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button onClick={() => loginWithRedirect()} className="btn btn-primary text-xl rounded-full font-bold">Start Free Trial</button>
                        <button onClick={() => logout({ returnTo: globalThis.location?.origin })} className="btn btn-primary text-xl rounded-full font-bold">Log Out</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero