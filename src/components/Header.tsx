import Head from 'next/head'

export default function Header() {
  return (
    <>
      <Head>
        <title>S.H.A.P.E.S</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="title">
          S.H.A.P.E.S Assessment
        </h1>
        <h2 className='subtitle'><b>S</b>piritual Gifts – <b>H</b>eart – <b>A</b>bilities – <b>P</b>ersonality – <b>E</b>xperiences</h2>
          <h3 className='subtitle'>(adapted from materials prepared for Saddleback Community Church)</h3>
      </header>
    </>
  )
}
