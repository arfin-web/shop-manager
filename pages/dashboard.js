import React from 'react'
import NewUsers from '../components/NewUsers'
import Stat from '../components/Stat'
import Head from 'next/head'

const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Shop Manager</title>
                <meta name="description" content="Shop Manager" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='container mx-auto'>
                <Stat />
                <NewUsers />
            </main>
        </>
    )
}

export default Dashboard