import { BLOG_POSTS } from "@/data/blog-posts";
import { ArrowRight, Calendar } from "lucide-react";

interface Props {
  onNavigate: (slug: string) => void;
}

export default function FeaturedArticles({ onNavigate }: Props) {
  const featured = BLOG_POSTS.filter((p) => p.featured).slice(0, 2);
  if (featured.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
          Recent Writing
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((post) => (
            <button
              key={post.slug}
              onClick={() => onNavigate(post.slug)}
              className="group text-left p-5 rounded-xl border border-border bg-card hover:shadow-md active:scale-[0.98] transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <h3
                className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2 text-pretty">
                {post.summary}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary font-medium">
                Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
