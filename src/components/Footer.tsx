import Head from 'next/head'
import styles from '@/styles/layout.module.css'

type FooterProps = {
  children: React.ReactNode
}

export default function Footer({ children }: FooterProps) {
  return (
    <header>Footer works{children}</header>
  )
}