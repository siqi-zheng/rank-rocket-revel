import fm from "front-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
  featured?: boolean;
}

// Vite eagerly imports all .md files in src/content/posts/ as raw strings at build time.
// No runtime file I/O — this is fully static and works on GitHub Pages.
const modules = import.meta.glob<string>(
  "../content/posts/*.md",
  { query: "?raw", import: "default", eager: true }
);

function parsePosts(): BlogPost[] {
  return Object.values(modules)
    .map((raw) => {
      // fm extracts the YAML into 'attributes' and the markdown into 'body'
      const { attributes, body } = fm<{
        slug: string;
        title: string;
        date: string;
        summary: string;
        tags?: string[];
        featured?: boolean;
      }>(raw);

      return {
        slug:     attributes.slug,
        title:    attributes.title,
        date:     attributes.date,
        summary:  attributes.summary,
        tags:     attributes.tags ?? [],
        featured: attributes.featured,
        content:  body.trim(),
      } satisfies BlogPost;
    })
    // Sort newest-first by date
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const BLOG_POSTS: BlogPost[] = parsePosts();
