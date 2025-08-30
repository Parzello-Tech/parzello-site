import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title } from "@/components/primitives";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import ParzelloLogo from "@/components/parzello_logo";

import { ArrowRight } from "lucide-react";
import { Card } from "@heroui/react";

import { MagicCard } from "@/components/magicui/magic-card";
import TechMarquee from "@/components/my_marquee";
import SectionAboutUs from "./section";

import { ProgressiveBlur } from "@/components/magicui/progressive-blur";
import { ParzelloBeams } from "@/components/parzello_beams";
import { Meteors } from "@/components/magicui/meteors";

export default function Page() {
    return (
        <>
            {/* === HERO SECTION === */}
            <section className="relative flex flex-col items-center justify-center gap-4 py-8  md:py-12">
                {/* === Background khusus Hero === */}
                <div className="absolute inset-0 ">
                    {/* atau pakai gambar */}
                    <div className="h-full w-full bg-[url('/images/BG.png')] bg-cover bg-center " style={{ opacity: 0.2 }} />
                </div>

                {/* === Hero Content === */}
                <div className={cn("group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800")}>
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>✨ Welcome to Parzello Tech</span>
                        <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>

                <div className="inline-block max-w-xl text-center justify-center">
                    <span className={title({ size: "lg" })}>We&nbsp;</span>
                    <span className={title({ color: "violet", size: "lg" })}>Build&nbsp;</span>
                    <br />
                    <span className={title({ size: "md" })}>Web & Mobile Solutions for Your Business Growth.</span>
                    <div className="my-5"></div>
                    <div className="mt-4 text-base">Parzello is a digital agency specializing in modern, scalable, and user-friendly applications.</div>
                </div>

                <div className="flex gap-3 mt-2">
                    <Link
                        className={buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                        })}
                        href="#"
                    >
                        Follow our Journey
                    </Link>
                </div>

                <div className="my-5"></div>

                <MagicCard
                    className="rounded-xl  bg-transparent
             backdrop-blur-xl cursor-pointer"
                >
                    <div className="p-3">
                        <Card
                            className="p-1 rounded-2xl 
             bg-gradient-to-br from-white/10 to-white/5 
             dark:from-white/5 dark:to-black/10 
             backdrop-blur-xl 
             shadow-xl flex items-center justify-center"
                        >
                            <ParzelloLogo size={70} className="relative z-10" />
                        </Card>
                    </div>
                </MagicCard>
                <Meteors className="opacity-[0.2]" />
            </section>

            <TechMarquee />

            <div className="my-8">
                <ParzelloBeams />
            </div>

            <div className="relative flex flex-col items-center justify-center gap-4 py-8  md:py-12">
                <div className="absolute inset-1 ">
                    <div className="h-full w-full bg-[url('/images/bg2.png')] bg-cover bg-bottom opacity-20 backdrop-blur-md" />
                </div>

                {/* === ABOUT US SECTION === */}
                <SectionAboutUs />
            </div>
        </>
    );
}
