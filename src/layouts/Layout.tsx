import styles from '@/styles/Layout.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>Layout works{children}</main>
      <Footer />
    </>
  )
}