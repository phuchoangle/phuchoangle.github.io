import { getWritingPost, getWritingPosts } from "@/lib/writing";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ScrollAnimator from "@/components/ScrollAnimator";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const posts = getWritingPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getWritingPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function WritingArticle(props: {
  params: Params;
}) {
  const { slug } = await props.params;
  const post = getWritingPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="py-24">
        <div className="max-w-[700px] mx-auto w-[90%]">
          <Link
            href="/writing"
            className="inline-flex items-center gap-1 text-sm text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors mb-8"
          >
            &larr; Back to Writing
          </Link>
          <header className="mb-12 animate-on-scroll">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
              <time>{post.date}</time>
              <span>&middot;</span>
              <span>{post.readingTime}</span>
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium uppercase tracking-wider bg-[var(--accent)]/10 text-[var(--accent)] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          <div className="prose prose-lg max-w-none animate-on-scroll">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>
      <ScrollAnimator />
    </>
  );
}
