import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/blogs");

export const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export async function getBlogBySlug(slug: string) {
  try {
    const filePath = path.join(contentDir, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter, content } = matter(fileContent);

    // Global line parser to catch every header flag level
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const toc = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length; 
      const title = match[2].trim();
      const id = generateSlug(title);
      
      toc.push({ level, title, id });
    }

    return { 
      frontmatter: {
        title: frontmatter.title || "Untitled Post",
        date: frontmatter.date || new Date().toISOString(),
        description: frontmatter.description || "",
        author: frontmatter.author || "SDE",
        category: frontmatter.category || [],
        image: frontmatter.image || null,
      }, 
      content, 
      toc 
    };
  } catch (error) {
    console.error(`Error reading blog slug (${slug}):`, error);
    return null;
  }
}

export async function getAllBlogs() {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);

  const blogs = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || "Untitled Post",
        date: data.date || new Date().toISOString(),
        description: data.description || "",
        author: data.author || "SDE",
        category: data.category || [],
        image: data.image || null,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return blogs;
}