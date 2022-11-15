import Head from 'next/head'
import Main from './main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shop Manager</title>
        <meta name="description" content="Shop Manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  )
}
