import { BLOG_POSTS } from "@/data/blog-posts";
import { ArrowRight, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  onNavigate: (slug: string) => void;
}

export default function FeaturedArticles({ onNavigate }: Props) {
  const navigate = useNavigate();
  const featured = BLOG_POSTS.filter((p) => p.featured).slice(0, 2);
  if (featured.length === 0) return null;

  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10">
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Recent Writing
          </h2>
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline underline-offset-4 active:scale-95 transition-all"
          >
            See more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
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
