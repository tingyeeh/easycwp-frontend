import Link from 'next/link'
import styles from '@/styles/sidebar.module.css'

type SidebarProps = {
  children: React.ReactNode
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <nav className={styles.nav}>
    Sidebar works
    {children}
    </nav>
  )
}