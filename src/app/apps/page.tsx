import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, apps } from "@/resources";
import { Apps } from "@/components/apps/Apps";

export async function generateMetadata() {
  return Meta.generate({
    title: apps.title,
    description: apps.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(apps.title)}`,
    path: apps.path,
  });
}

export default function AppsPage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={apps.path}
        title={apps.title}
        description={apps.description}
        image={`/api/og/generate?title=${encodeURIComponent(apps.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" align="center" gap="12">
        <Text
          variant="label-default-s"
          onBackground="brand-medium"
          style={{ fontFamily: "var(--font-code)", letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          Products
        </Text>
        <Heading variant="heading-strong-xl" align="center">
          {apps.label}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          {apps.description}
        </Text>
      </Column>
      <Apps />
    </Column>
  );
}
