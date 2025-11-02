import { Heading, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema, Meta, Line } from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { MessageCircle } from "lucide-react"; // ikon WhatsApp opsional

export async function generateMetadata() {
    return Meta.generate({
        title: home.title,
        description: home.description,
        baseURL: baseURL,
        path: home.path,
        image: home.image,
    });
}

export default function Home() {
    return (
        <>
            <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
                <Schema
                    as="webPage"
                    baseURL={baseURL}
                    path={home.path}
                    title={home.title}
                    description={home.description}
                    image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
                    author={{
                        name: person.name,
                        url: `${baseURL}${about.path}`,
                        image: `${baseURL}${person.avatar}`,
                    }}
                />
                <Column fillWidth horizontal="center" gap="m">
                    <Column maxWidth="s" horizontal="center" align="center">
                        {home.featured.display && (
                            <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="32" paddingLeft="12">
                                <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false} href={home.featured.href}>
                                    <Row paddingY="2">{home.featured.title}</Row>
                                </Badge>
                            </RevealFx>
                        )}
                        <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
                            <Heading wrap="balance" variant="display-strong-l">
                                {home.headline}
                            </Heading>
                        </RevealFx>
                        <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
                            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                                {home.subline}
                            </Text>
                        </RevealFx>
                        <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
                            <Button id="about" data-border="rounded" href={about.path} variant="secondary" size="m" weight="default" arrowIcon>
                                <Row gap="8" vertical="center" paddingRight="4">
                                    {about.avatar.display && <Avatar marginRight="8" style={{ marginLeft: "-0.75rem" }} src={person.avatar} size="m" />}
                                    {about.title}
                                </Row>
                            </Button>
                        </RevealFx>
                    </Column>
                </Column>
                <RevealFx translateY="16" delay={0.6}>
                    <Projects range={[1, 1]} />
                </RevealFx>
                {routes["/blog"] && (
                    <Column fillWidth gap="24" marginBottom="l">
                        <Row fillWidth paddingRight="64">
                            <Line maxWidth={48} />
                        </Row>
                        <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
                            <Row flex={1} paddingLeft="l" paddingTop="24">
                                <Heading as="h2" variant="display-strong-xs" wrap="balance">
                                    Latest from the blog
                                </Heading>
                            </Row>
                            <Row flex={3} paddingX="20">
                                <Posts range={[1, 2]} columns="2" />
                            </Row>
                        </Row>
                        <Row fillWidth paddingLeft="64" horizontal="end">
                            <Line maxWidth={48} />
                        </Row>
                    </Column>
                )}
                <Projects range={[2]} />

                {/* 👥 Team Section */}
                <RevealFx translateY="16" delay={0.4}>
                    <Column fillWidth gap="24" marginTop="l" marginBottom="xl">
                        <Row fillWidth paddingX="20" horizontal="center">
                            <Heading as="h2" variant="display-strong-xs" wrap="balance">
                                Meet Our Team
                            </Heading>
                        </Row>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                            {/* 🧑 Member 1 */}
                            <div className="flex flex-col items-center text-center bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-6 transition hover:shadow-lg">
                                {/* <img src="images/team/muhammad_kholis.png" alt="Muhammad Kholis" className="w-24 h-24 rounded-full object-cover mb-4" /> */}
                                <h3 className="text-lg font-semibold">Muhammad Kholis</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Founder & Lead Developer</p>
                                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">Fullstack developer with focus on Flutter, Firebase, and Next.js.</p>
                            </div>
                        </div>
                    </Column>
                </RevealFx>

                <Mailchimp />
            </Column>

            {/* 🔽 Tombol WhatsApp Floating */}
            <a
                href="https://wa.me/6285161787501?text=Halo%20Tim%20*Parzello%20Tech*%20%20Saya%20ingin%20konsultasi%20proyek.
"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: "fixed",
                    bottom: "24px",
                    right: "24px",
                    backgroundColor: "#000000",
                    color: "white",
                    borderRadius: "50%",
                    width: "56px",
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    zIndex: 1000,
                    transition: "transform 0.2s ease-in-out",
                }}
                className="hover:scale-110" // jika kamu pakai Tailwind
            >
                <MessageCircle size={28} />
            </a>
        </>
    );
}
