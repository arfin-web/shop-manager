import React from 'react'
import NewUsers from '../components/NewUsers'
import Stat from '../components/Stat'

const Dashboard = () => {
    return (
        <>
            <main className='container mx-auto'>
                <Stat />
                <NewUsers />
            </main>
        </>
    )
}

export default Dashboard