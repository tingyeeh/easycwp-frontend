import Head from 'next/head'
import styles from '@/styles/layout.module.css'

type HeaderProps = {
  children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <header>Header works{children}</header>
  )
}