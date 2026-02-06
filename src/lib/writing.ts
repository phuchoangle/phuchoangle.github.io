import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const WRITING_DIR = path.join(process.cwd(), "content", "writing");

export interface WritingPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export function getWritingPosts(): WritingPost[] {
  if (!fs.existsSync(WRITING_DIR)) return [];
  const files = fs.readdirSync(WRITING_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(WRITING_DIR, filename), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      tags: data.tags || [],
      readingTime: readingTime(content).text,
      content,
    };
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getWritingPost(slug: string): WritingPost | undefined {
  const filePath = path.join(WRITING_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    description: data.description || "",
    tags: data.tags || [],
    readingTime: readingTime(content).text,
    content,
  };
}
