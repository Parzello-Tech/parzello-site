// AboutUs.tsx
import { Card, CardBody } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import { Users, Code2, Rocket } from "lucide-react";

const features = [
    {
        icon: <Users className="size-6 text-violet-500" />,
        title: "Collaborative Team",
        desc: "We believe in teamwork and close collaboration with our clients.",
    },
    {
        icon: <Code2 className="size-6 text-violet-500" />,
        title: "Modern Technology",
        desc: "We use the latest tech stack to build scalable and maintainable apps.",
    },
    {
        icon: <Rocket className="size-6 text-violet-500" />,
        title: "Business Growth",
        desc: "Our goal is to accelerate your business with impactful digital solutions.",
    },
];

export default function SectionAboutUs() {
    return (
        <section id="about" className="flex flex-col items-center justify-center py-16 px-6 md:px-12">
            <h2 className={title({ class: "text-center" })}>About Us</h2>
            <p className={subtitle({ class: "mt-4 max-w-2xl text-center text-gray-500" })}>At Parzello, we are passionate about crafting digital products that are simple, modern, and help businesses grow in the digital era.</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
                {features.map((f, i) => (
                    <Card key={i} isBlurred shadow="sm" className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl">
                        <CardBody className="flex flex-col gap-3 p-6">
                            <div>{f.icon}</div>
                            <h3 className="text-lg font-semibold">{f.title}</h3>
                            <p className="text-sm text-gray-500">{f.desc}</p>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    );
}
