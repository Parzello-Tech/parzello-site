import { CustomMDX, ScrollToHash } from "@/components";
import { baseURL } from "@/resources";
import { getPosts } from "@/utils/utils";
import {
  Column,
  Heading,
  Meta,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "apps", "privacy-policy"]);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const posts = getPosts(["src", "app", "apps", "privacy-policy"]);
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return Meta.generate({
    title: `Privacy Policy — ${post.metadata.title}`,
    description: post.metadata.summary || `Kebijakan Privasi untuk ${post.metadata.title}`,
    baseURL,
    path: `/apps/privacy-policy/${slug}`,
  });
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getPosts(["src", "app", "apps", "privacy-policy"]);
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <Column as="section" maxWidth="m" gap="xl" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`/apps/privacy-policy/${slug}`}
        title={`Privacy Policy — ${post.metadata.title}`}
        description={post.metadata.summary || ""}
      />

      <SmartLink href={`/apps/${slug}`}>
        <Text variant="label-default-s" onBackground="neutral-weak">
          ← Kembali ke {post.metadata.title}
        </Text>
      </SmartLink>

      <Column gap="8">
        <Text variant="label-default-s" onBackground="neutral-weak">
          Kebijakan Privasi
        </Text>
        <Heading variant="display-strong-l">{post.metadata.title}</Heading>
      </Column>

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

      <ScrollToHash />
    </Column>
  );
}
