import { motion, AnimatePresence } from "framer-motion";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { subtitle, title } from "@/components/primitives";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import ParzelloLogo from "@/components/parzello_logo";

import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";

import { MagicCard } from "@/components/magicui/magic-card";
import TechMarquee from "@/components/my_marquee";
import SectionAboutUs from "./section";

import { ProgressiveBlur } from "@/components/magicui/progressive-blur";
import { ParzelloBeams } from "@/components/parzello_beams";
import { Meteors } from "@/components/magicui/meteors";

import { IconWorld, IconDeviceMobile, IconSettings, IconBrush } from "@tabler/icons-react";

export default function Page() {
    return (
        <>
            {/* === HERO SECTION === */}
            <section className="relative flex flex-col items-center justify-center gap-4 py-8  md:py-12">
                <Meteors className="opacity-[0.2]" />
                {/* === Background khusus Hero === */}
                <div className="absolute inset-0 ">
                    {/* atau pakai gambar */}
                    <div className="h-full w-full bg-[url('/images/BG.png')] bg-cover bg-center " style={{ opacity: 0.2 }} />
                </div>

                <div className="my-2"></div>

                {/* === Hero Content === */}
                <div className={cn("group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800")}>
                    <MagicCard className="rounded-xl  backdrop-blur-xl cursor-pointer group" gradientColor={"#ffffff"} gradientOpacity={0.1} gradientFrom={"#ffffff76"} gradientTo={"#ffffff76"}>
                        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span>✨ Welcome to Parzello Tech</span>
                            <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </AnimatedShinyText>
                    </MagicCard>
                </div>

                <div className="inline-block max-w-xl text-center justify-center">
                    {/*  <span className={title({ size: "lg" })}>We&nbsp;</span>
                    <span className={title({ color: "violet", size: "lg" })}>Build&nbsp;</span>
                    <br />
                    <span className={title({ size: "md" })}>Web & Mobile Solutions for Your Business Growth.</span>
 */}
                    <h2 className={title({ class: "text-center", size: "lg", color: "violet" })}>
                        <span className="text-primary">
                            Digital Solutions <br /> for Your
                        </span>{" "}
                        Business <span className="text-primary">Growth</span>
                    </h2>
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

                <MagicCard className="rounded-xl bg-transparent backdrop-blur-xl cursor-pointer group" gradientColor={"#6600ffff"} gradientOpacity={0.1}>
                    <div className="p-3">
                        <Card
                            className="p-1 rounded-2xl 
      bg-gradient-to-br from-white/10 to-white/5 
      dark:from-white/5 dark:to-black/10 
      backdrop-blur-xl 
      shadow-xl flex items-center justify-center
      transition-transform duration-300 group-hover:scale-105"
                        >
                            <ParzelloLogo size={70} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
                        </Card>
                    </div>
                </MagicCard>
            </section>

            <TechMarquee />

            <div className="relative">
                <br />
                <br />
                {/* === GLOBAL BACKGROUND === */}
                <div className="absolute inset-0">
                    <div className="h-full w-full bg-[url('/images/bg_main_blur.png')] bg-cover bg-bottom opacity-20 backdrop-blur-md" />
                </div>

                {/* === CONTENT WRAPPER === */}
                <div className="relative">
                    <section className="my-8">
                        <ParzelloBeams />
                    </section>

                    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-12">
                        <SectionAboutUs />
                    </section>

                    {/* === SECTION LANJUTAN DI SINI === */}

                    {/* === OUR SERVICES SECTION === */}
                    <section id="services" className="flex flex-col items-center justify-center py-16 px-6 md:px-12">
                        <h2
                            className={title({
                                class: "text-center",
                                size: "lg",
                                color: "violet",
                            })}
                        >
                            <span className="text-primary">What We</span> Do
                        </h2>

                        <p
                            className={subtitle({
                                class: "mt-4 max-w-2xl text-center text-gray-500",
                            })}
                        >
                            We provide a wide range of digital solutions to help your business scale and stand out in today’s competitive market.
                        </p>

                        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-2 w-full max-w-5xl">
                            {[
                                {
                                    icon: <IconWorld size={32} stroke={1.5} />,
                                    title: "Web Development",
                                    desc: "Website modern, cepat, dan responsif.",
                                    color: "#66afb9ff",
                                },
                                {
                                    icon: <IconDeviceMobile size={32} stroke={1.5} />,
                                    title: "Mobile App Development",
                                    desc: "Aplikasi Android & iOS dengan performa tinggi.",
                                    color: "#8C66B9",
                                },
                                {
                                    icon: <IconSettings size={32} stroke={1.5} />,
                                    title: "Custom Solutions",
                                    desc: "Sistem digital sesuai kebutuhan bisnis.",
                                    color: "#b96666ff",
                                },
                                {
                                    icon: <IconBrush size={32} stroke={1.5} />,
                                    title: "UI/UX Design",
                                    desc: "Desain antarmuka yang menarik & user-friendly.",
                                    color: "#b9a766ff",
                                },
                            ].map((s, i) => (
                                <Card key={i} isBlurred shadow="sm" className="rounded-2xl border border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl">
                                    <CardBody className="flex flex-row gap-4 p-2">
                                        {/* Icon Box */}
                                        <Card
                                            className="flex items-center justify-center w-20 h-20 rounded-xl overflow-hidden shrink-0 p-0"
                                            style={{
                                                background: `linear-gradient(to top right, ${s.color}1A, ${s.color}33)`,
                                            }}
                                        >
                                            <CardBody className="flex items-center justify-center p-0">
                                                <div className="text-3xl" style={{ color: s.color }}>
                                                    {s.icon}
                                                </div>
                                            </CardBody>
                                        </Card>

                                        {/* Text */}
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-lg font-semibold">{s.title}</h3>
                                            <p className="text-sm text-gray-500">{s.desc}</p>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* === PORTFOLIO SECTION === */}
                    <section className="flex flex-col items-center justify-center gap-6 py-12">
                        <h2 className={title({ size: "lg", class: "text-center", color: "violet" })}>
                            <span className="text-primary">Our</span> Works
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                            {[{ name: "Parzello Website", img: "/images/portfolio/portfolio1.png", desc: "Official website for Parzello digital agency.", link: "#" }].map((p, i) => (
                                <MagicCard key={i} className="rounded-xl bg-transparent backdrop-blur-xl group p-4" gradientColor={"#9333ea"} gradientOpacity={0.1}>
                                    <Card isBlurred className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                                        <img src={p.img} alt={p.name} className="w-full h-40 object-cover" />

                                        <CardBody>
                                            <h3 className="text-lg font-semibold">{p.name}</h3>
                                            <p className="text-sm opacity-80">{p.desc}</p>
                                            {/*   <a href={p.link} className="text-violet-500 text-sm font-medium mt-2 inline-block hover:underline">
                                                View Details →
                                            </a> */}
                                            <br />
                                            <Button color="secondary" variant="flat" className="mt-2">
                                                View Details →
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </MagicCard>
                            ))}
                        </div>
                        <div className="mt-6">
                            <Link
                                className={buttonStyles({
                                    color: "primary",
                                    radius: "full",
                                    variant: "shadow",
                                })}
                                href="#"
                            >
                                See Full Portfolio
                            </Link>
                        </div>
                    </section>

                    {/* === TEAM SECTION === */}
                    <section className="flex flex-col items-center justify-center gap-6 py-16">
                        <h2
                            className={title({
                                size: "lg",
                                class: "text-center",
                                color: "violet",
                            })}
                        >
                            <span className="text-primary">Meet The</span> Team
                        </h2>
                        <br />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl justify-items-center">
                            {[
                                {
                                    name: "Muhammad Kholis",
                                    role: "Founder & Lead Developer",
                                    img: "/images/muhammadkholis.png",
                                    url: "https://portfolio-mkholis.vercel.app/", // ganti sesuai link tujuan
                                },
                            ].map((t, i) => (
                                <MagicCard key={i} className="rounded-xl bg-transparent backdrop-blur-xl group" gradientColor={"#2563eb"} gradientOpacity={0.1}>
                                    <a href={t.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Card className="p-4 flex flex-col items-center text-center rounded-2xl shadow-lg bg-white/5 dark:bg-black/20 transition-transform duration-300 group-hover:scale-105 cursor-pointer">
                                            <img src={t.img} alt={t.name} className="w-24 h-24 rounded-full object-cover mb-4 shadow-md" />
                                            <h3 className="text-lg font-semibold">{t.name}</h3>
                                            <p className="text-sm opacity-70">{t.role}</p>
                                        </Card>
                                    </a>
                                </MagicCard>
                            ))}
                        </div>
                    </section>

                    <section className="relative overflow-hidden  flex items-center justify-center " id="contact">
                        <div className="relative z-10  w-full">
                            <Card isBlurred className="p-10  shadow-2xl border border-none">
                                <CardHeader className="flex flex-col gap-2 items-center text-center">
                                    <p className="text-primary">Need Any Project? </p>
                                    <h1 className="text-8xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                                        {/*  <BlurFade delay={0.3} inView>
                                            <AnimatedGradientText>Let’s Start</AnimatedGradientText>
                                        </BlurFade> */}
                                        <h2 className={title({ class: "text-center", size: "lg", color: "violet" })}>Let’s Start</h2>
                                    </h1>
                                </CardHeader>

                                <CardBody className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3 text-lg">
                                    {/* Phone */}
                                    <Button className="border-gray-100 dark:border-gray-800" startContent={<Phone className="w-5 h-5 text-white-500" />} as="a" href="tel:+6285161787501" variant="bordered" color="primary" radius="lg">
                                        +62 8516-1787-501
                                    </Button>

                                    {/* Email */}
                                    <Button className="border-gray-100 dark:border-gray-800" startContent={<Mail className="w-5 h-5 text-white-500" />} as="a" href="mailto:parzivalxdd@gmail.com" variant="bordered" color="primary" radius="lg">
                                        parzivalxdd@gmail.com
                                    </Button>
                                </CardBody>

                                <CardFooter className="flex justify-center gap-4">
                                    {/*   <Button as="a" href="mailto:parzivalxdd@gmail.com" color="primary" radius="full" variant="shadow">
                                Send Email
                            </Button>
                            <Button as="a" href="https://linkedin.com/in/muhammad-kholis-51ba57195" target="_blank" radius="full" variant="bordered">
                                LinkedIn
                            </Button> */}

                                    {/*     <Sosmed /> */}
                                </CardFooter>
                            </Card>
                            {/* <BorderBeam duration={8} size={400} /> */}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
