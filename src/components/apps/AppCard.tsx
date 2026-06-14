"use client";

import { Badge, Card, Column, Media, Row, Text } from "@once-ui-system/core";

interface AppCardProps {
  href: string;
  image?: string;
  title: string;
  summary: string;
  tag?: string;
}

export const AppCard: React.FC<AppCardProps> = ({ href, image, title, summary, tag }) => {
  return (
    <Card
      href={href}
      fillWidth
      fillHeight
      direction="column"
      radius="l-4"
      border="neutral-alpha-medium"
      background="surface"
      transition="micro-medium"
      overflow="hidden"
    >
      <Column fillWidth style={{ position: "relative" }}>
        {image ? (
          <Media
            fillWidth
            aspectRatio="16 / 10"
            cursor="interactive"
            src={image}
            alt={title}
            sizes="(max-width: 768px) 100vw, 400px"
          />
        ) : (
          <Column
            fillWidth
            center
            background="neutral-alpha-weak"
            style={{ aspectRatio: "16 / 10" }}
          >
            <Text variant="label-default-s" onBackground="neutral-weak">
              {title}
            </Text>
          </Column>
        )}
        {tag && (
          <Badge
            background="brand-alpha-weak"
            onBackground="brand-strong"
            textVariant="label-default-s"
            paddingX="12"
            paddingY="4"
            arrow={false}
            style={{ position: "absolute", top: "12px", left: "12px" }}
          >
            {tag}
          </Badge>
        )}
      </Column>
      <Column fillWidth flex={1} paddingX="20" paddingY="24" gap="8">
        <Text variant="heading-strong-m" wrap="balance">
          {title}
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" wrap="pretty">
          {summary}
        </Text>
        <Row marginTop="8" gap="8" vertical="center">
          <Text variant="label-strong-s" onBackground="brand-medium">
            View app
          </Text>
          <Text variant="label-strong-s" onBackground="brand-medium" aria-hidden="true">
            →
          </Text>
        </Row>
      </Column>
    </Card>
  );
};
