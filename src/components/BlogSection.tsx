import { BLOG_POSTS } from "@/data/blog-posts";
import { Calendar, ArrowRight } from "lucide-react";

interface Props {
  onNavigate: (slug: string) => void;
}

export default function BlogSection({ onNavigate }: Props) {
  return (
    <section id="blog" className="py-16 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-10"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Blog
        </h2>
        <div className="space-y-5">
          {BLOG_POSTS.map((post) => (
            <button
              key={post.slug}
              onClick={() => onNavigate(post.slug)}
              className="group w-full text-left p-5 rounded-xl border border-border bg-background hover:shadow-md active:scale-[0.98] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1.5 text-pretty">
                    {post.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground shrink-0 sm:pt-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary font-medium">
                Read article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
