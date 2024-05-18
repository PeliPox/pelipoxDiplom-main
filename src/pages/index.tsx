import Head from 'next/head'
import { Inter } from 'next/font/google'
import { HeaderMain } from '@/views/components/Header'
import { MainPage } from '@/views/pages/MainPage'
import Layout from '@/views/Layout'
import { FooterMain } from '@/views/components/Footer'

export default function Home() {
  return (
    <Layout title='Главная'>
      <HeaderMain />
      <MainPage />
      <FooterMain />
    </Layout>
  )
}
