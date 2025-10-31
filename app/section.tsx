// AboutUs.tsx
import { Button, Card, CardBody, Link } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import { Users, Code2, Rocket } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { button as buttonStyles } from "@heroui/theme";

const features = [
    {
        icon: <Users className="size-6" />,
        title: "Collaborative Team",
        desc: "We believe in teamwork and close collaboration with our clients.",
        color: "#339F88",
    },
    {
        icon: <Code2 className="size-6" />,
        title: "Modern Technology",
        desc: "We use the latest tech stack to build scalable and maintainable apps.",
        color: "#5986C7",
    },
    {
        icon: <Rocket className="size-6" />,
        title: "Business Growth",
        desc: "Our goal is to accelerate your business with impactful digital solutions.",
        color: "#8C66B9",
    },
];

export function SectionAboutUs() {
    return (
        <section id="about" className="flex flex-col items-center justify-center py-16 px-6 md:px-12">
            <h2 className={title({ class: "text-center", size: "lg", color: "violet" })}>
                <span className="text-primary">About Our Company and </span> What We Do
            </h2>

            <p className={subtitle({ class: "mt-4 max-w-2xl text-center text-gray-500" })}>At Parzello, we are passionate about crafting digital products that are simple, modern, and help businesses grow in the digital era.</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
                {features.map((f, i) => (
                    <Card key={i} isBlurred shadow="sm" className="rounded-2xl border border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl">
                        <CardBody className="flex flex-col gap-3 p-6">
                            <Card
                                className="items-center justify-center w-12 h-12 rounded-lg"
                                style={{
                                    background: `linear-gradient(to top right, ${f.color}1A, ${f.color}33)`, // hex + alpha
                                }}
                            >
                                <CardBody className="flex items-center justify-center">
                                    <div style={{ color: f.color }}>{f.icon}</div>
                                </CardBody>
                            </Card>
                            <h3 className="text-lg font-semibold">{f.title}</h3>
                            <p className="text-sm text-gray-500">{f.desc}</p>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export function SectionOurApps() {
    return (
        <section className="flex flex-col items-center justify-center gap-6 py-12">
            <h2 className={title({ size: "lg", class: "text-center", color: "violet" })}>
                <span className="text-primary">Our</span> Apps
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
    );
}
