import { Heading, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema, Meta, Line, Card, Media, Icon } from "@once-ui-system/core";
import { home, about, person, baseURL, routes, team } from "@/resources";
import { Mailchimp, FloatingWhatsApp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

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

                {team.display && (
                    <RevealFx translateY="16" delay={0.3}>
                        <Column fillWidth gap="32" marginTop="l" marginBottom="xl">
                            {/* 🧩 Title */}
                            <Row fillWidth horizontal="center">
                                <Heading as="h2" variant="display-strong-xs" wrap="balance">
                                    {team.title}
                                </Heading>
                            </Row>

                            {/* 👥 Team Grid */}
                            <Row fillWidth gap="24" horizontal="center" paddingX="l">
                                {team.members.map((member, index) => (
                                    <Card
                                        key={index}
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

                <Mailchimp />
            </Column>

            {/* 🔽 Tombol WhatsApp Floating */}
            {/* 🔽 Tombol WhatsApp Floating */}
            <FloatingWhatsApp />
        </>
    );
}
