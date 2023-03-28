import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import Sidebar from '@/components/Sidebar'
import LocaleSwitcher from '@/components/LocaleSwitcher'

type GsspPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const GsspPage: NextPageWithLayout = (props: GsspPageProps) => {
  const router = useRouter()
  const { defaultLocale } = router

  return (
    <div>
      <h1>getServerSideProps page</h1>
      <p>Current locale: {props.locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(props.locales)}</p>

      <LocaleSwitcher />

      <Link href="/gsp">To getStaticProps page</Link>
      <br />

      <Link href="/gsp/first">To dynamic getStaticProps page</Link>
      <br />

      <Link href="/">To index page</Link>
      <br />
    </div>
  )
}

export default GsspPage

GsspPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

type Props = {
  locale?: string
  locales?: string[]
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
  locales,
}) => {
  return {
    props: {
      locale,
      locales,
    },
  }
}
