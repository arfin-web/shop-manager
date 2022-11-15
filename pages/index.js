import Head from 'next/head'
import Stat from '../components/Stat'
import NewUsers from '../components/NewUsers'
import Main from './main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shop Manager</title>
        <meta name="description" content="Shop Manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container mx-auto'>
        <Main />
      </main>
    </>
  )
}
