import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout'
import Sidebar from '@/components/sidebar'
import LocaleSwitcher from '@/components/locale-switcher'

import styles from '@/styles/Home.module.css'


const Index: NextPageWithLayout = () => {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <div>
      <h1>Index page</h1>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>

      <LocaleSwitcher />

      <Link href="/gsp">To getStaticProps page</Link>
      <br />

      <Link href="/gsp/first">To dynamic getStaticProps page</Link>
      <br />

      <Link href="/gssp">To getServerSideProps page</Link>
      <br />
    </div>
  )
}

export default Index

Index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
