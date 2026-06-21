import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
  website?: string;
  mockup?: string;
  /** Per-page brand/primary color: an Once UI scheme name
   * (blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan). */
  accent?: string;
  privacyPolicy?: boolean;
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
    website: data.website || "",
    mockup: data.mockup || "",
    accent: data.accent || "",
    privacyPolicy: data.privacyPolicy || false,
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(/* turbopackIgnore: true */ process.cwd(), ...customPath);
  return getMDXData(postsDir);
}

/**
 * Reads the intrinsic pixel dimensions of an image in the `public` directory
 * (PNG or JPEG). `src` is the public path used in content, e.g. "/images/a.png".
 * Runs at build time (server only). Returns null if it can't be determined.
 */
export function getImageDimensions(src: string): { width: number; height: number } | null {
  try {
    if (!src || /^https?:\/\//.test(src)) return null;
    const filePath = path.join(process.cwd(), "public", src.replace(/^\//, ""));
    if (!fs.existsSync(filePath)) return null;
    const buf = fs.readFileSync(filePath);

    // PNG: width/height are 32-bit big-endian ints in the IHDR chunk.
    if (buf.length >= 24 && buf.toString("ascii", 1, 4) === "PNG") {
      return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    }

    // JPEG: scan segments for a Start-Of-Frame marker.
    if (buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8) {
      let offset = 2;
      while (offset + 9 < buf.length) {
        if (buf[offset] !== 0xff) {
          offset++;
          continue;
        }
        const marker = buf[offset + 1];
        const isSOF =
          marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);
        if (isSOF) {
          return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
        }
        offset += 2 + buf.readUInt16BE(offset + 2);
      }
    }

    return null;
  } catch {
    return null;
  }
}
