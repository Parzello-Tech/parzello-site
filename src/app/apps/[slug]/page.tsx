import { CustomMDX, ScrollToHash } from "@/components";
import { Apps } from "@/components/apps/Apps";
import { about, apps, baseURL, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getImageDimensions, getPosts } from "@/utils/utils";
import {
  AvatarGroup,
  Background,
  Badge,
  Button,
  Carousel,
  Column,
  Heading,
  Line,
  Media,
  Meta,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "apps", "items"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "apps", "items"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${apps.path}/${post.slug}`,
  });
}

export default async function App({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "apps", "items"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((member) => ({
      src: member.avatar,
    })) || [];

  const tag = typeof post.metadata.tag === "string" ? post.metadata.tag : undefined;
  const developer = post.metadata.team?.[0]?.name || person.name;
  const isPlayStore = post.metadata.link?.includes("play.google.com");
  const platform = isPlayStore ? "Android" : post.metadata.link ? "Web" : undefined;
  const appName = post.metadata.title.split(" — ")[0];

  // Media: a banner/thumbnail (images[0]), an optional gallery Carousel, and an
  // optional single mobile mockup. The hero shows the mockup when present,
  // otherwise the banner; the carousel shows whatever images aren't in the hero.
  const hasMockup = Boolean(post.metadata.mockup);
  const heroImage = post.metadata.mockup || post.metadata.images[0] || "";
  const galleryImages = hasMockup ? post.metadata.images : post.metadata.images.slice(1);

  // Detect gallery orientation so phone screenshots show in a portrait carousel
  // and wide screenshots show full-width — works for any app, not just this one.
  const galleryDims = galleryImages[0] ? getImageDimensions(galleryImages[0]) : null;
  const galleryPortrait = galleryDims ? galleryDims.height > galleryDims.width : false;
  const galleryAspect = galleryDims
    ? `${galleryDims.width} / ${galleryDims.height}`
    : "16 / 9";

  // Portrait screenshots are shown 3-per-slide on desktop so the wide viewport
  // isn't wasted. Group them into chunks and widen the carousel aspect ratio to
  // fit a row of three (plus the gaps between them).
  const portraitPerSlide = 3;
  const portraitGroups: string[][] = [];
  if (galleryPortrait) {
    for (let i = 0; i < galleryImages.length; i += portraitPerSlide) {
      portraitGroups.push(galleryImages.slice(i, i + portraitPerSlide));
    }
  }
  const portraitGroupAspect = galleryDims
    ? `${galleryDims.width * portraitPerSlide} / ${galleryDims.height}`
    : "27 / 16";

  const specs = [
    platform && { label: "Platform", value: platform },
    tag && { label: "Category", value: tag },
    { label: "Developer", value: developer },
    post.metadata.publishedAt && { label: "Updated", value: formatDate(post.metadata.publishedAt) },
  ].filter(Boolean) as { label: string; value: string }[];

  const playstoreButton = post.metadata.link ? (
    <Button
      href={post.metadata.link}
      target="_blank"
      rel="noopener noreferrer"
      variant="primary"
      size="l"
      weight="strong"
      prefixIcon="googleplay"
      suffixIcon="arrowUpRightFromSquare"
    >
      Playstore
    </Button>
  ) : null;

  const websiteButton = post.metadata.website ? (
    <Button
      href={post.metadata.website}
      target="_blank"
      rel="noopener noreferrer"
      variant="secondary"
      size="l"
      weight="default"
      prefixIcon="globe"
      suffixIcon="arrowUpRightFromSquare"
    >
      Website
    </Button>
  ) : null;

  const ctaButtons = (
    <>
      {playstoreButton}
      {websiteButton}
    </>
  );
  const hasCta = Boolean(playstoreButton || websiteButton);

  return (
    <Column as="section" maxWidth="l" gap="xl" fillWidth data-brand={post.metadata.accent || undefined}>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${apps.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* back link */}
      <SmartLink href="/apps">
        <Text variant="label-default-s" onBackground="neutral-weak">
          ← Apps
        </Text>
      </SmartLink>

      {/* ===== HERO ===== */}
      <Row fillWidth gap="40" vertical="center" s={{ direction: "column" }}>
        <Column flex={1} gap="20" horizontal="start">
          {tag && (
            <Badge
              background="brand-alpha-weak"
              onBackground="brand-strong"
              textVariant="label-default-s"
              paddingX="12"
              paddingY="4"
              arrow={false}
            >
              {tag}
            </Badge>
          )}
          <Heading variant="display-strong-l" wrap="balance">
            {post.metadata.title}
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
            {post.metadata.summary}
          </Text>
          {post.metadata.team?.length > 0 && (
            <Row gap="12" vertical="center" wrap paddingTop="4">
              <AvatarGroup reverse avatars={avatars} size="s" />
              <Text variant="label-default-s" onBackground="neutral-weak">
                by {developer}
              </Text>
            </Row>
          )}
          {hasCta && (
            <Row gap="12" wrap vertical="center" paddingTop="8">
              {ctaButtons}
            </Row>
          )}
        </Column>

        {heroImage &&
          (hasMockup ? (
            <Column flex={1} fillWidth horizontal="center">
              <Media
                priority
                sizes="(max-width: 768px) 70vw, 320px"
                aspectRatio="9 / 16"
                objectFit="contain"
                radius="xl"
                alt={`${appName} mockup`}
                src={heroImage}
                style={{ maxWidth: "300px", width: "100%" }}
              />
            </Column>
          ) : (
            <Column flex={1} fillWidth>
              <Media
                priority
                sizes="(max-width: 768px) 100vw, 560px"
                aspectRatio="16 / 9"
                radius="l"
                border="neutral-alpha-medium"
                alt={post.metadata.title}
                src={heroImage}
              />
            </Column>
          ))}
      </Row>

      {/* ===== SPEC PILLS ===== */}
      {specs.length > 0 && (
        <Row fillWidth gap="8" wrap>
          {specs.map((spec) => (
            <Row
              key={spec.label}
              fitWidth
              gap="8"
              vertical="center"
              paddingX="16"
              paddingY="8"
              radius="full"
              border="neutral-alpha-medium"
              background="surface"
            >
              <Text variant="label-default-xs" onBackground="neutral-weak">
                {spec.label}
              </Text>
              <Text variant="label-strong-s">{spec.value}</Text>
            </Row>
          ))}
        </Row>
      )}

      {/* ===== DESCRIPTION / FEATURES ===== */}
      <Column
        fillWidth
        as="article"
        background="surface"
        border="neutral-alpha-weak"
        radius="l"
        padding="40"
        s={{ padding: "24" }}
      >
        <CustomMDX source={post.content} />
      </Column>

      {/* ===== GALLERY / SCREENSHOTS ===== */}
      {galleryImages.length > 0 && (
        <Column fillWidth gap="20">
          <Heading as="h2" variant="display-strong-xs">
            Screenshots
          </Heading>
          <Row fillWidth horizontal={galleryPortrait ? "center" : "start"}>
            <Column fillWidth>
              {galleryPortrait ? (
                // Portrait screenshots: each carousel slide holds up to 3 phone
                // shots side by side on desktop, stacking the carousel as usual.
                portraitGroups.length > 1 ? (
                  <Carousel
                    aspectRatio={portraitGroupAspect}
                    indicator="line"
                    sizes="(max-width: 960px) 100vw, 960px"
                    items={portraitGroups.map((group, gi) => ({
                      slide: (
                        <Row fill gap="16" horizontal="center">
                          {group.map((src, i) => (
                            <Media
                              key={src}
                              radius="l"
                              border="neutral-alpha-weak"
                              objectFit="contain"
                              aspectRatio={galleryAspect}
                              sizes="(max-width: 768px) 33vw, 320px"
                              alt={`${appName} screenshot ${gi * portraitPerSlide + i + 1}`}
                              src={src}
                              style={{ flex: 1, minWidth: 0 }}
                            />
                          ))}
                        </Row>
                      ),
                    }))}
                  />
                ) : (
                  <Row fill gap="16" horizontal="center">
                    {galleryImages.map((src, i) => (
                      <Media
                        key={src}
                        enlarge
                        radius="l"
                        border="neutral-alpha-weak"
                        objectFit="contain"
                        aspectRatio={galleryAspect}
                        sizes="(max-width: 768px) 33vw, 320px"
                        alt={`${appName} screenshot ${i + 1}`}
                        src={src}
                        style={{ flex: 1, minWidth: 0, maxWidth: "320px" }}
                      />
                    ))}
                  </Row>
                )
              ) : galleryImages.length > 1 ? (
                <Carousel
                  aspectRatio={galleryAspect}
                  indicator="line"
                  sizes="(max-width: 960px) 100vw, 960px"
                  items={galleryImages.map((src, i) => ({
                    slide: src,
                    alt: `${appName} screenshot ${i + 1}`,
                  }))}
                />
              ) : (
                <Media
                  enlarge
                  radius="l"
                  border="neutral-alpha-weak"
                  aspectRatio={galleryAspect}
                  alt={`${appName} screenshot`}
                  src={galleryImages[0]}
                />
              )}
            </Column>
          </Row>
        </Column>
      )}

      {/* ===== CLOSING CTA ===== */}
      {hasCta && (
        <Column
          fillWidth
          overflow="hidden"
          position="relative"
          horizontal="center"
          align="center"
          gap="24"
          border="brand-alpha-medium"
          background="surface"
          radius="xl"
          paddingX="32"
          paddingY="64"
        >
          <Background
            position="absolute"
            top="0"
            left="0"
            mask={{ x: 50, y: 0, radius: 100 }}
            gradient={{
              display: true,
              opacity: 90,
              x: 50,
              y: 0,
              width: 100,
              height: 100,
              tilt: 0,
              colorStart: "brand-background-strong",
              colorEnd: "static-transparent",
            }}
            dots={{
              display: true,
              opacity: 40,
              size: "2",
              color: "brand-on-background-weak",
            }}
          />
          <Column maxWidth="s" horizontal="center" align="center" gap="12" position="relative">
            <Badge
              background="brand-alpha-weak"
              onBackground="brand-strong"
              textVariant="label-default-s"
              paddingX="12"
              paddingY="4"
              arrow={false}
            >
              Get started
            </Badge>
            <Heading as="h2" variant="display-strong-m" align="center" wrap="balance">
              Coba {appName} sekarang
            </Heading>
            <Text onBackground="neutral-weak" align="center" wrap="balance">
              {post.metadata.summary}
            </Text>
          </Column>
          <Row gap="12" wrap horizontal="center" vertical="center" position="relative">
            {ctaButtons}
          </Row>
        </Column>
      )}

      {/* ===== MORE APPS ===== */}
      <Column fillWidth gap="32" horizontal="center" marginTop="24">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl">
          More apps
        </Heading>
        <Apps exclude={[post.slug]} range={[1, 3]} />
      </Column>

      <ScrollToHash />
    </Column>
  );
}
