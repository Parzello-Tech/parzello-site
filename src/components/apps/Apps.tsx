import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import { AppCard } from "./AppCard";

interface AppsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Apps({ range, exclude }: AppsProps) {
  let allApps = getPosts(["src", "app", "apps", "items"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allApps = allApps.filter((app) => !exclude.includes(app.slug));
  }

  const sortedApps = allApps.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedApps = range
    ? sortedApps.slice(range[0] - 1, range[1] ?? sortedApps.length)
    : sortedApps;

  return (
    <Grid columns="3" m={{ columns: 2 }} s={{ columns: 1 }} fillWidth gap="16">
      {displayedApps.map((app) => (
        <AppCard
          key={app.slug}
          href={`/apps/${app.slug}`}
          image={app.metadata.images?.[0] || app.metadata.image || ""}
          title={app.metadata.title}
          summary={app.metadata.summary}
          tag={typeof app.metadata.tag === "string" ? app.metadata.tag : undefined}
        />
      ))}
    </Grid>
  );
}
