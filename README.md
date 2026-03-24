## Personal Website and Blog
This is the repository for my personal website and portfolio. It features a modern, responsive design and includes a custom markdown-based blogging system where I share articles on topics like statistics and Bayesian experimental design.

### Tech Stack
- **Framework:** React with Vite and TypeScript
- **Styling:** Tailwind CSS with shadcn/ui components
- **Routing & Pages:** React Router (handling Index, BlogList, BlogPost, and NotFound views)
- **Testing:** Configured setup in the test directory (supports Vitest or Jest)

### Project Structure
The `src` directory is organized to cleanly separate reusable UI components, page layouts, and static content. 

- **components:** Houses custom features (like `FeaturedArticles` and `BackToTop`) alongside a robust folder of shadcn/ui components.
- **content:** Stores the actual markdown (`.md`) files for all blog posts.
- **data:** Contains TypeScript configurations to manage blog post metadata and site indexing.
- **hooks:** Includes custom React hooks for managing mobile responsiveness and toast notifications.
- **pages:** Defines the primary layout views for the application.

### Getting Started
To run this project locally on your machine, follow these standard development steps.

1. Clone the repository to your local machine.
2. Run `npm install` (or `yarn install` / `pnpm install`) to install all dependencies.
3. Execute `npm run dev` to start the local Vite development server.
4. Open the provided localhost URL in your browser to view the site.

### Adding Blog Posts
Publishing new content is a straightforward process that does not require touching the core application code. Create a new markdown file in the `src/content/posts/` directory. Next, open `src/data/blog-posts.ts` and add your new post's metadata (such as the title, publish date, and snippet) to ensure it appears on the blog listing page.
