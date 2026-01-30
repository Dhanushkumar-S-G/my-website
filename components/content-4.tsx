import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { TextEffect } from '@/components/ui/text-effect'
import { TextShimmer } from './ui/text-shimmer'
import { h5 } from 'motion/react-client'
import { AnimatedShinyButton } from './ui/animated-shiny-button'


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
                        <p>I am a software engineer with a strong focus on <span className="font-bold">distributed systems and databases</span>. I currently work as a Software Development Engineer at <span className="" style={{color:"#9441F5"}}  ><Link href="https://www.amazon.com">Amazon</Link></span>, where I design and build network monitoring systems that operate at scale.</p>
                        <p>
                            Previously, I interned at a startup called <span className="" style={{color:"#9441F5"}}  ><Link href="https://www.appviewx.com">AppViewX</Link></span> as part of the Install and Upgrade team where I developed a <span className="font-bold">lightweight prerequisite assessment tool</span> for Kubernetes cluster nodes that checks if tools and
configurations are ready, reports issues, and suggests fixes, reducing installation issues by up to <span className="font-bold">65%</span>.
                        </p>
                        <p>I enjoy diving deep into engineering problems, reasoning about system behavior from first principles, and designing solutions that are robust, scalable, and operationally sound.</p>
                        

                        <AnimatedShinyButton>Move about me</AnimatedShinyButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
