import {TextEffect} from "@/components/motion-primitives/text-effect";
import React from "react";
import {transitionVariants} from "@/lib/utils";
import {AnimatedGroup} from "@/components/motion-primitives/animated-group";

export default function Agenda() {
    return (
        <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:grid-cols-[1fr_auto]">
                    <div className="text-center lg:text-left">
                        <TextEffect
                            triggerOnView
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h2"
                            className="mb-4 text-3xl font-semibold md:text-4xl">
                            Agenda
                        </TextEffect>
                    </div>

                    <AnimatedGroup
                        triggerOnView
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                        className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0"
                    >
                        <div className="pb-6">
                            <div className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono'>10:00</span>
                                <span>Doors Open</span>
                            </div>
                            <p className="text-muted-foreground mt-4">Check in, get settled, and meet fellow developers. Breakfast provided.</p>
                        </div>
                        <div className="py-6">
                            <div className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono'>10:30</span>
                                <span>Learn</span>
                            </div>
                            <p className="text-muted-foreground mt-4">Hands-on intro to Vercel v0, Clerk, and Supabase. Understand modern development patterns.</p>
                        </div>
                        <div className="py-6">
                            <div className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono'>11:30</span>
                                <span>Build Time</span>
                            </div>
                            <p className="text-muted-foreground mt-4">Build your real application from scratch with authentication and data storage.</p>
                        </div>
                        <div className="py-6">
                            <div className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono'>13:00</span>
                                <span>Lunch Break</span>
                            </div>
                            <p className="text-muted-foreground mt-4">Lunch provided. Recharge and share ideas with other builders.</p>
                        </div>
                        <div className="py-6">
                            <div className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono'>14:00</span>
                                <span>Deploy & Ship</span>
                            </div>
                            <p className="text-muted-foreground mt-4">Push your project to production on Vercel. Walk away with a live URL to share.</p>
                        </div>
                        <div className="py-6">
                            <div className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono'>17:00</span>
                                <span>Showcase & Prizes</span>
                            </div>
                            <p className="text-muted-foreground mt-4">Demo what you built. Community votes for most creative, best UI, and fastest ship.</p>
                        </div>
                        <div className="py-6">
                            <div className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono'>18:00</span>
                                <span>Networking & Close</span>
                            </div>
                            <p className="text-muted-foreground mt-4">Connect with the community, collect your swag and v0 credits, and wrap up the day.</p>
                        </div>
                    </AnimatedGroup>
                </div>
            </div>
        </section>
    )
}
