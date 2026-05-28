import { getAllBlogs } from "@/lib/mdx";
import { BlogCard } from "@/components/blog-card";

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="w-full text-foreground antialiased font-sans">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        
        {/* Page Header */}
        <div className="mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground text-center">
            My Thoughts & Publications
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed text-center mx-auto">
            A collection of my learnings, technical deep dives, and project experiences as a software engineer.
          </p>
        </div>

        {/* Blog Post List (Stacked layout pairs gorgeously with your card format) */}
        {blogs.length > 0 ? (
          <div className="flex flex-col gap-8">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                title={blog.title}
                description={blog.description}
                // Fallback to "Anonymous" or a default name if omitted in markdown
                author={blog.author || "Dhanushkumar S G"} 
                // Format the date to look polished (e.g., "May 24, 2026")
                date={new Date(blog.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
                category={blog.category} // Array of strings from frontmatter
                url={`/blogs/${blog.slug}`} // Resolves to /blogs/title-of-the-blog
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-border rounded-2xl bg-muted/10">
            <p className="text-muted-foreground text-base">
              No posts published yet. Check back soon!
            </p>
          </div>
        )}

      </div>
    </div>
  );
}