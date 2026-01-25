import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { TextEffect } from '@/components/ui/text-effect'
import { TextShimmer } from './ui/text-shimmer'
import { h5 } from 'motion/react-client'
import { AnimatedShinyButton } from './ui/animated-shiny-button'
import { PointerHighlight } from './ui/pointer-highlight'


export default function ContentSection() {
    return (
        <section className="">
            <div className="mx-auto px-6">
                <div className="grid md:grid-cols-2 md:gap-12 gap-8">
                    <div>
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="max-w-4xl text-balance text-2xl max-md:font-semibold md:text-4xl">
                            Hey, I am Dhanushkumar S G.
                        </TextEffect>
                        <TextShimmer className=' text-sm' duration={3} as={h5}>
                            Software Engineer, Distributed Systems, F1 Enthusiast, SIM Racer.
                        </TextShimmer>
                    </div>
                    
                    <div className="space-y-6">
                        <p>Lyra is evolving to be more than just the models. It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate.</p>
                        <p>
                            Tailark. <span className="font-bold">It supports an entire ecosystem</span> — from products innovate. Sit minus, quod debitis autem quia aspernatur delectus impedit modi, neque non id ad dignissimos? Saepe deleniti perferendis beatae.
                        </p>
                        

                        <AnimatedShinyButton>Move about me</AnimatedShinyButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
