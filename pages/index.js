import Head from 'next/head'
import NewUsers from '../components/NewUsers'
import Stat from '../components/Stat'

export default function Home() {
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
