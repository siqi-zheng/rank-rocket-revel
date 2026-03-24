import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";

export default function BlogListPage() {
  
  // Ensure the page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Changed to Link for better accessibility and SEO */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground active:scale-95 transition-all mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <h1
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-10 text-balance"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Blog
        </h1>

        <div className="space-y-5">
          {BLOG_POSTS.map((post) => (
            
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block w-full text-left p-5 rounded-xl border border-border bg-card hover:shadow-md active:scale-[0.98] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex-1">
                  <h2
                    className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {post.title}
                  </h2>
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
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
