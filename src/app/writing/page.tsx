import { getWritingPosts } from "@/lib/writing";
import BlogCard from "@/components/BlogCard";
import ScrollAnimator from "@/components/ScrollAnimator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on blockchain, research, and technology by Dr. Phuc Le.",
};

export default function WritingPage() {
  const posts = getWritingPosts();

  return (
    <>
      <section className="py-24">
        <div className="max-w-[800px] mx-auto w-[90%]">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 animate-on-scroll">
            Writing
          </h1>
          <p className="text-lg text-[var(--text-muted)] mb-16 animate-on-scroll">
            Thoughts on blockchain, research, and technology.
          </p>

          {posts.length === 0 ? (
            <p className="text-[var(--text-muted)] animate-on-scroll">
              Articles coming soon.
            </p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.slug} className="animate-on-scroll">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <ScrollAnimator />
    </>
  );
}
