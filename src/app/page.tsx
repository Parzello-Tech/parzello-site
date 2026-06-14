import type { ReactNode } from "react";
import { Heading, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema, Meta, Line, Card, Media, Icon, Grid } from "@once-ui-system/core";
import { home, about, person, baseURL, routes, team, work } from "@/resources";
import { Mailchimp, FloatingWhatsApp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { Apps } from "@/components/apps/Apps";

// Monospace, uppercase section label ("eyebrow") used to head each section,
// following the New Design layout while reusing the existing brand tokens.
function Eyebrow({ children }: { children: ReactNode }) {
    return (
        <Text
            variant="label-default-s"
            onBackground="brand-medium"
            style={{ fontFamily: "var(--font-code)", letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
            {children}
        </Text>
    );
}

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
    const whatsappNumber = "6285161787501";
    const whatsappMsg = encodeURIComponent("Halo Tim *Parzello Tech*  Saya ingin konsultasi proyek.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

    return (
        <>
            <Column maxWidth="m" gap="24" paddingY="12" horizontal="center">
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

                {/* ===== HERO SECTION ===== */}
                <Column fillWidth horizontal="center" gap="m" paddingY="16">
                    <Column maxWidth="s" horizontal="center" align="center" gap="24">
                        {home.featured.display && (
                            <RevealFx fillWidth horizontal="center" paddingTop="16" paddingLeft="12">
                                <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false} href={home.featured.href}>
                                    <Row paddingY="2">{home.featured.title}</Row>
                                </Badge>
                            </RevealFx>
                        )}
                        <Column gap="12" horizontal="center">
                            <RevealFx translateY="4" fillWidth horizontal="center">
                                <Heading wrap="balance" variant="display-strong-l" align="center">
                                    {home.headline}
                                </Heading>
                            </RevealFx>
                            <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center">
                                <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l" align="center" style={{ maxWidth: "640px" }}>
                                    Kami adalah startup sekaligus digital agency yang berdedikasi membangun aplikasi modern (web/mobile) dan otomatisasi cerdas yang membantu bisnis Anda tumbuh lebih cepat.
                                </Text>
                            </RevealFx>
                        </Column>
                        <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
                            <Row gap="16" wrap horizontal="center" vertical="center">
                                <Button id="contact" data-border="rounded" href={whatsappLink} target="_blank" rel="noopener noreferrer" variant="primary" size="m" weight="default" suffixIcon="arrowRight">
                                    Mulai Proyek
                                </Button>
                                <Button data-border="rounded" href="#services" variant="secondary" size="m" weight="default">
                                    Layanan Kami
                                </Button>
                                <Button data-border="rounded" href={work.path} variant="tertiary" size="m" weight="default" arrowIcon>
                                    Explore Work
                                </Button>
                            </Row>
                        </RevealFx>

                        {/* Statistics Bar */}
                        <RevealFx translateY="12" delay={0.6} fillWidth horizontal="center" paddingTop="24">
                            <Row gap="40" wrap horizontal="center" vertical="center" style={{ opacity: 0.9 }}>
                                <Column align="center" gap="4">
                                    <Heading variant="display-strong-xs" onBackground="brand-strong">8+</Heading>
                                    <Text variant="label-default-s" onBackground="neutral-weak">Aplikasi &amp; Sistem</Text>
                                </Column>
                                <Line background="neutral-alpha-medium" vert height="24" />
                                <Column align="center" gap="4">
                                    <Heading variant="display-strong-xs" onBackground="brand-strong">100%</Heading>
                                    <Text variant="label-default-s" onBackground="neutral-weak">Kepuasan Klien</Text>
                                </Column>
                                <Line background="neutral-alpha-medium" vert height="24" />
                                <Column align="center" gap="4">
                                    <Heading variant="display-strong-xs" onBackground="brand-strong">24/7</Heading>
                                    <Text variant="label-default-s" onBackground="neutral-weak">Dukungan Prioritas</Text>
                                </Column>
                            </Row>
                        </RevealFx>
                    </Column>
                </Column>

                {/* ===== CORE SERVICES ===== */}
                <Column fillWidth gap="32" id="services" paddingY="20" paddingX="l">
                    <Column fillWidth gap="12" horizontal="center" align="center">
                        <Eyebrow>Services &amp; Capabilities</Eyebrow>
                        <Heading as="h2" variant="display-strong-xs" wrap="balance" align="center">
                            Solusi Digital Unggulan
                        </Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak" align="center" style={{ maxWidth: "480px" }}>
                            Kami menghadirkan layanan rekayasa perangkat lunak modern untuk mendukung transformasi digital bisnis Anda.
                        </Text>
                    </Column>

                    <Grid columns="2" m={{ columns: 2 }} s={{ columns: 1 }} fillWidth gap="20">
                        <Card radius="l" border="neutral-alpha-medium" background="surface" padding="24" direction="column" gap="16" transition="micro-medium">
                            <Row gap="12" vertical="center">
                                <Icon name="apps" size="m" onBackground="brand-medium" />
                                <Heading as="h3" variant="heading-strong-l">
                                    Mobile App Development
                                </Heading>
                            </Row>
                            <Text variant="body-default-m" onBackground="neutral-weak">
                                Pengembangan aplikasi mobile (Android &amp; iOS) yang interaktif, ergonomis, dan berkinerja tinggi menggunakan Flutter dan Dart.
                            </Text>
                        </Card>

                        <Card radius="l" border="neutral-alpha-medium" background="surface" padding="24" direction="column" gap="16" transition="micro-medium">
                            <Row gap="12" vertical="center">
                                <Icon name="globe" size="m" onBackground="brand-medium" />
                                <Heading as="h3" variant="heading-strong-l">
                                    Web Engineering
                                </Heading>
                            </Row>
                            <Text variant="body-default-m" onBackground="neutral-weak">
                                Rekayasa web modern berbasis Next.js, React, dan TypeScript yang responsif, cepat, SEO-friendly, serta berkinerja optimal.
                            </Text>
                        </Card>

                        <Card radius="l" border="neutral-alpha-medium" background="surface" padding="24" direction="column" gap="16" transition="micro-medium">
                            <Row gap="12" vertical="center">
                                <Icon name="rocket" size="m" onBackground="brand-medium" />
                                <Heading as="h3" variant="heading-strong-l">
                                    Integrasi &amp; Otomatisasi
                                </Heading>
                            </Row>
                            <Text variant="body-default-m" onBackground="neutral-weak">
                                Integrasi database cloud (Supabase/Firebase) dan otomatisasi workflow bisnis menggunakan API kustom maupun pipeline n8n.
                            </Text>
                        </Card>

                        <Card radius="l" border="neutral-alpha-medium" background="surface" padding="24" direction="column" gap="16" transition="micro-medium">
                            <Row gap="12" vertical="center">
                                <Icon name="grid" size="m" onBackground="brand-medium" />
                                <Heading as="h3" variant="heading-strong-l">
                                    UI/UX &amp; Creative Assets
                                </Heading>
                            </Row>
                            <Text variant="body-default-m" onBackground="neutral-weak">
                                Perancangan antarmuka pengguna yang estetik, sistematis, dan user-centric di Figma, serta pembuatan aset multimedia pendukung.
                            </Text>
                        </Card>
                    </Grid>
                </Column>

                {/* ===== VALUE PROPOSITION ===== */}
                <Column fillWidth gap="32" paddingY="20" paddingX="l">
                    <Column fillWidth gap="12" horizontal="center" align="center">
                        <Eyebrow>Why Parzello Tech</Eyebrow>
                        <Heading as="h2" variant="display-strong-xs" wrap="balance" align="center">
                            Mengapa Memilih Kami?
                        </Heading>
                    </Column>

                    <Grid columns="3" s={{ columns: 1 }} fillWidth gap="24">
                        <Column gap="12" padding="16" border="neutral-alpha-weak" radius="m" background="neutral-alpha-weak">
                            <Heading variant="heading-strong-m" onBackground="neutral-strong">
                                1. Teknologi Modern
                            </Heading>
                            <Text variant="body-default-s" onBackground="neutral-weak">
                                Kami menggunakan teknologi dan framework terdepan seperti Next.js dan Flutter untuk menghasilkan aplikasi yang cepat, aman, dan mudah diskalakan.
                            </Text>
                        </Column>

                        <Column gap="12" padding="16" border="neutral-alpha-weak" radius="m" background="neutral-alpha-weak">
                            <Heading variant="heading-strong-m" onBackground="neutral-strong">
                                2. Desain Premium
                            </Heading>
                            <Text variant="body-default-s" onBackground="neutral-weak">
                                Setiap piksel dan interaksi dirancang dengan sangat hati-hati, memastikan visual yang memukau dan pengalaman pengguna yang luar biasa.
                            </Text>
                        </Column>

                        <Column gap="12" padding="16" border="neutral-alpha-weak" radius="m" background="neutral-alpha-weak">
                            <Heading variant="heading-strong-m" onBackground="neutral-strong">
                                3. Kerja Sama Fleksibel
                            </Heading>
                            <Text variant="body-default-s" onBackground="neutral-weak">
                                Kami mengedepankan komunikasi transparan, pengembangan iteratif (agile), serta dukungan berkelanjutan pasca-rilis untuk kesuksesan jangka panjang.
                            </Text>
                        </Column>
                    </Grid>
                </Column>

                {/* ===== PORTFOLIO & CLIENT WORK ===== */}
                <Column fillWidth gap="32" paddingY="20">
                    <RevealFx translateY="4" fillWidth>
                        <Row fillWidth gap="24" vertical="end" paddingX="l" s={{ direction: "column" }}>
                            <Column flex={1} gap="12">
                                <Eyebrow>Portfolio</Eyebrow>
                                <Heading as="h2" variant="display-strong-xs" wrap="balance">
                                    Featured Client Projects
                                </Heading>
                            </Column>
                            <Column flex={1} maxWidth={24}>
                                <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
                                    Pilihan produk digital dan sistem yang kami rancang serta kembangkan untuk institusi, pemerintah, dan mitra bisnis.
                                </Text>
                            </Column>
                        </Row>
                    </RevealFx>
                    <RevealFx translateY="16" delay={0.2}>
                        <Projects range={[1, 3]} />
                    </RevealFx>
                </Column>

                {/* ===== OUR PRODUCTS & APPS ===== */}
                <Column fillWidth gap="32" paddingY="20" paddingX="l">
                    <RevealFx translateY="4" fillWidth>
                        <Row fillWidth gap="24" vertical="end" s={{ direction: "column" }}>
                            <Column flex={1} gap="12">
                                <Eyebrow>Our Products</Eyebrow>
                                <Heading as="h2" variant="display-strong-xs" wrap="balance">
                                    Aplikasi &amp; Produk Digital Kami
                                </Heading>
                            </Column>
                            <Column flex={1} maxWidth={24}>
                                <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
                                    Koleksi aplikasi inovatif yang kami rilis langsung ke publik untuk membantu mengoptimalkan kebutuhan operasional dan produktivitas harian.
                                </Text>
                            </Column>
                        </Row>
                    </RevealFx>
                    <RevealFx translateY="16" delay={0.2}>
                        <Apps range={[1, 3]} />
                    </RevealFx>
                </Column>

                {/* ===== BLOG ===== */}
                {routes["/blog"] && (
                    <Column fillWidth gap="24" paddingY="20">
                        <Row fillWidth paddingRight="64">
                            <Line background="neutral-alpha-medium" />
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
                            <Line background="neutral-alpha-medium" />
                        </Row>
                    </Column>
                )}

                {/* ===== TEAM SECTION ===== */}
                {team.display && (
                    <RevealFx translateY="16" delay={0.3}>
                        <Column fillWidth gap="32" paddingY="20" paddingX="l">
                            <Column fillWidth horizontal="center" align="center" gap="12">
                                <Eyebrow>People</Eyebrow>
                                <Heading as="h2" variant="display-strong-xs" wrap="balance" align="center">
                                    {team.title}
                                </Heading>
                            </Column>

                            <Row fillWidth gap="24" horizontal="center" wrap>
                                {team.members.map((member) => (
                                    <Card
                                        key={member.name}
                                        radius="l-4"
                                        direction="column"
                                        border="neutral-alpha-medium"
                                        style={{ width: "320px" }}
                                    >
                                        <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center">
                                            <Avatar size="xs" src={member.avatar} />
                                            <Text variant="label-default-s">{member.name}</Text>
                                        </Row>

                                        <Media
                                            border="neutral-alpha-weak"
                                            fillWidth
                                            aspectRatio="1 / 1"
                                            radius="l"
                                            alt={member.name}
                                            src={member.avatar}
                                        />

                                        <Column fillWidth paddingX="20" paddingY="24" gap="8">
                                            <Text variant="body-default-xl">{member.role}</Text>
                                            <Text onBackground="neutral-weak" variant="body-default-s">
                                                {member.description}
                                            </Text>
                                        </Column>

                                        {member.profileLink && (
                                            <>
                                                <Line background="neutral-alpha-medium" />
                                                <Row fillWidth paddingX="20" paddingY="12" horizontal="center" vertical="center">
                                                    <Button
                                                        variant="secondary"
                                                        size="l"
                                                        weight="default"
                                                        href={member.profileLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        arrowIcon
                                                    >
                                                        See Profile
                                                    </Button>
                                                </Row>
                                            </>
                                        )}
                                    </Card>
                                ))}
                            </Row>
                        </Column>
                    </RevealFx>
                )}

                {/* ===== FINAL CALL TO ACTION CARD ===== */}
                <RevealFx translateY="16" delay={0.4} fillWidth>
                    <Card radius="l" border="neutral-alpha-medium" background="surface" padding="40" fillWidth direction="column" gap="24" style={{ position: "relative", overflow: "hidden" }}>
                        <Column gap="12" horizontal="center" align="center" fillWidth>
                            <Badge background="brand-alpha-weak" onBackground="brand-strong">Get Started</Badge>
                            <Heading as="h2" variant="display-strong-xs" align="center" wrap="balance">
                                Siap mewujudkan ide digital Anda menjadi kenyataan?
                            </Heading>
                            <Text variant="body-default-m" onBackground="neutral-weak" align="center" style={{ maxWidth: "540px" }} wrap="pretty">
                                Hubungi kami hari ini untuk konsultasi gratis mengenai aplikasi web, aplikasi mobile, sistem integrasi, atau perancangan desain produk Anda.
                            </Text>
                        </Column>
                        <Row gap="16" wrap horizontal="center" vertical="center" fillWidth>
                            <Button data-border="rounded" href={whatsappLink} target="_blank" rel="noopener noreferrer" variant="primary" size="l" suffixIcon="arrowRight">
                                Konsultasi Gratis
                            </Button>
                            <Button data-border="rounded" href={`mailto:${person.email}`} variant="secondary" size="l" prefixIcon="email">
                                Kirim Email
                            </Button>
                        </Row>
                    </Card>
                </RevealFx>

                <Mailchimp />
            </Column>

            <FloatingWhatsApp />
        </>
    );
}
