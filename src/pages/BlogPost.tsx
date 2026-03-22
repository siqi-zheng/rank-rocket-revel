import { useParams, useNavigate } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog-posts";
import { ArrowLeft, Calendar } from "lucide-react";

function renderMarkdown(md: string) {
  // Minimal markdown-to-JSX for headings, bold, italic, links, blockquotes, lists, code
  const lines = md.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  const inline = (text: string): React.ReactNode => {
    // Links
    const parts: React.ReactNode[] = [];
    const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = linkRe.exec(text)) !== null) {
      if (m.index > last) parts.push(formatInline(text.slice(last, m.index)));
      parts.push(
        <a key={m.index} href={m[2]} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">
          {m[1]}
        </a>
      );
      last = m.index + m[0].length;
    }
    if (last < text.length) parts.push(formatInline(text.slice(last)));
    return parts.length === 1 ? parts[0] : <>{parts}</>;
  };

  const formatInline = (text: string): React.ReactNode => {
    return text
      .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/)
      .map((seg, idx) => {
        if (seg.startsWith("**") && seg.endsWith("**"))
          return <strong key={idx} className="text-foreground font-semibold">{seg.slice(2, -2)}</strong>;
        if (seg.startsWith("*") && seg.endsWith("*"))
          return <em key={idx}>{seg.slice(1, -1)}</em>;
        return seg;
      });
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") { i++; continue; }

    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="text-2xl font-semibold text-foreground mt-10 mb-4" style={{ fontFamily: "var(--font-serif)" }}>{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="text-xl font-semibold text-foreground mt-8 mb-3" style={{ fontFamily: "var(--font-serif)" }}>{line.slice(4)}</h3>);
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} className="border-l-4 border-primary/30 pl-4 my-4 text-muted-foreground italic">
          {inline(line.slice(2))}
        </blockquote>
      );
    } else if (/^\d+\.\s/.test(line.trim())) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={i} className="list-decimal list-inside space-y-1.5 my-4 text-muted-foreground">
          {items.map((item, j) => <li key={j}>{inline(item)}</li>)}
        </ol>
      );
      continue;
    } else if (line.trim().startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={i} className="list-disc list-inside space-y-1.5 my-4 text-muted-foreground">
          {items.map((item, j) => <li key={j}>{inline(item)}</li>)}
        </ul>
      );
      continue;
    } else if (line.startsWith("$$")) {
      elements.push(
        <pre key={i} className="my-4 p-4 bg-secondary rounded-lg text-sm text-foreground overflow-x-auto font-mono">
          {line.replace(/\$\$/g, "")}
        </pre>
      );
    } else {
      elements.push(
        <p key={i} className="text-base leading-relaxed text-muted-foreground my-3 text-pretty">
          {inline(line)}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-4">Post not found</h1>
          <button onClick={() => navigate("/")} className="text-primary hover:underline">
            ← Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-12 md:py-20">
      <article className="max-w-3xl mx-auto px-6">
        <button
          onClick={() => navigate("/#blog")}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground active:scale-95 transition-all mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </button>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Calendar className="w-4 h-4" />
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.15] text-balance mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <hr className="border-border mb-8" />

        <div className="prose-custom">{renderMarkdown(post.content)}</div>

        <hr className="border-border mt-12 mb-6" />
        <button
          onClick={() => navigate("/#blog")}
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4"
        >
          <ArrowLeft className="w-4 h-4" /> All articles
        </button>
      </article>
    </main>
  );
}
