import React from 'react'
import Feature from './Feature'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Pricing from './Pricing'
import Statistics from './Statistics'
import Testimonials from './Testimonials'

const Main = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Feature />
            <Statistics />
            <Pricing />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Main