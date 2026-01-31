import React from 'react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer';


export default function MyThoughtsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <HeroHeader />
        {children}
        <FooterSection />
    </>
  )
}