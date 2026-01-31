import React from 'react'
import { HeroHeader } from '@/components/header'


export default function MyThoughtsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <HeroHeader />
        {children}
    </>
  )
}