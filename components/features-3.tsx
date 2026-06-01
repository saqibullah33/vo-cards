import {Card, CardContent, CardHeader} from '@/components/ui/card'
import {CircleDollarSignIcon, GiftIcon, TrophyIcon, UtensilsIcon, WifiIcon, UsersIcon} from 'lucide-react'
import React, {ReactNode} from 'react'
import {TextEffect} from "@/components/motion-primitives/text-effect";
import {transitionVariants} from "@/lib/utils";
import {AnimatedGroup} from "@/components/motion-primitives/animated-group";

export default function Features() {
    return (
        <section className="py-16 md:py-32 dark:bg-transparent bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="text-balance text-4xl font-semibold lg:text-5xl">
                        You bring the vibes. We handle the rest.
                    </TextEffect>
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.2}
                        as="p"
                        className="mt-4 text-muted-foreground">
                        Show up ready to build. Everything else is taken care of — from the space you work in to the tools and prizes waiting at the finish line.
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
                >
                    <Card
                        className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
                        <div className="group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <WifiIcon
                                        className="size-6"
                                        aria-hidden
                                    />
                                </CardDecorator>
                                <h3 className="mt-6 font-medium text-xl">Space & WiFi</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">A dedicated venue fully set up for a day of focused building — fast WiFi, power outlets, and room to think.</p>
                            </CardContent>
                        </div>

                        <div className="group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <UtensilsIcon
                                        className="size-6"
                                        aria-hidden
                                    />
                                </CardDecorator>
                                <h3 className="mt-6 font-medium text-xl">Food Covered</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="mt-3 text-sm text-muted-foreground">Breakfast, lunch, and snacks covered. Keep your energy up and your mind on the build.</p>
                            </CardContent>
                        </div>

                        <div className="group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <GiftIcon
                                        className="size-6"
                                        aria-hidden
                                    />
                                </CardDecorator>
                                <h3 className="mt-6 font-medium text-xl">Swag</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="mt-3 text-sm text-muted-foreground">Leave with more than a live URL. Swag from Vercel, Clerk, and Supabase for every attendee.</p>
                            </CardContent>
                        </div>

                        <div className="group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <CircleDollarSignIcon
                                        className="size-6"
                                        aria-hidden
                                    />
                                </CardDecorator>
                                <h3 className="mt-6 font-medium text-xl">v0 Credits</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="mt-3 text-sm text-muted-foreground">Every attendee gets Vercel v0 credits to use on the day and take home — keep building after the event.</p>
                            </CardContent>
                        </div>

                        <div className="group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <TrophyIcon
                                        className="size-6"
                                        aria-hidden
                                    />
                                </CardDecorator>
                                <h3 className="mt-6 font-medium text-xl">Prizes</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="mt-3 text-sm text-muted-foreground">Best projects win. Prizes for most creative build, best UI, and the one that ships the fastest.</p>
                            </CardContent>
                        </div>

                        <div className="group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <UsersIcon
                                        className="size-6"
                                        aria-hidden
                                    />
                                </CardDecorator>
                                <h3 className="mt-6 font-medium text-xl">Community</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="mt-3 text-sm text-muted-foreground">Meet 70 fellow developers in Peshawar. Network, collaborate, and join a growing local tech community.</p>
                            </CardContent>
                        </div>
                    </Card>
                </AnimatedGroup>
            </div>
        </section>
    )
}

const CardDecorator = ({children}: { children: ReactNode }) => (
    <div
        className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
        />

        <div
            className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
