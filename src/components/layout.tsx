import Head from 'next/head'
import styles from '@/styles/Layout.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type LayoutProps = {
  children: React.ReactNode
  Header: React.FC;
  Footer: React.FC;
}

export default function Layout({ children, Header, Footer }: LayoutProps) {
  return (
    <>      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>Layout works{children}</main>
      <Footer />
    </>
  )
}