import { Card, CardBody } from "@heroui/react";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from "react-icons/si"; // pakai react-icons
import { Marquee } from "@/components/magicui/marquee";
import React from "react";

const techs = [
    { name: "Next.js", icon: <SiNextdotjs className="size-8 text-white" /> },
    { name: "React", icon: <SiReact className="size-8 text-sky-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="size-8 text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="size-8 text-teal-400" /> },
];

export default function TechMarquee() {
    return (
        <div className="space-y-1">
            <div className="opacity-40">
                <Marquee repeat={5}>
                    {techs.map((tech, i) => (
                        <Card key={i} isBlurred shadow="sm" className="mx-2 w-20 aspect-square rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center">
                            <CardBody className="flex flex-col items-center justify-center gap-2">
                                {React.cloneElement(tech.icon, { className: "size-5" })}
                                <p className="text-[10px] text-primary">{tech.name}</p>
                            </CardBody>
                        </Card>
                    ))}
                </Marquee>
            </div>

            <div className="opacity-40">
                <Marquee reverse repeat={5}>
                    {techs.map((tech, i) => (
                        <Card key={i} isBlurred shadow="sm" className="mx-2 w-20 aspect-square rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center">
                            <CardBody className="flex flex-col items-center justify-center gap-2">
                                {React.cloneElement(tech.icon, { className: "size-5" })}
                                <p className="text-[10px] text-primary">{tech.name}</p>
                            </CardBody>
                        </Card>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}
