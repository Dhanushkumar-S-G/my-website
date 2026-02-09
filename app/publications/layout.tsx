"use client"
import React from 'react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer';


export default function PublicationsLayout({
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