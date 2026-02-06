import Link from "next/link";
import type { WritingPost } from "@/lib/writing";

export default function BlogCard({ post }: { post: WritingPost }) {
  return (
    <Link href={`/writing/${post.slug}`} className="block group">
      <article className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
        <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] mb-3">
          <time>{post.date}</time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
          {post.title}
        </h3>
        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
          {post.description}
        </p>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
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
      </article>
    </Link>
  );
}
