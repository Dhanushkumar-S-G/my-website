import { getBlogBySlug, generateSlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { TocSidebar } from "@/components/toc-sidebar"; // Import Client Component

import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

interface PostPageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

const prettyCodeOptions = {
  theme: "github-dark",
  keepBackground: true,
};

const getTextFromChildren = (children: any): string => {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getTextFromChildren).join("");
  if (children?.props?.children) return getTextFromChildren(children.props.children);
  return "";
};

const mdxComponents = {
  h1: ({ children }: any) => {
    const text = getTextFromChildren(children);
    const id = generateSlug(text);
    return (
      <h1 id={id} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-12 mb-6 scroll-mt-28 border-b border-border/20 pb-3">
        {children}
      </h1>
    );
  },
  h2: ({ children }: any) => {
    const text = getTextFromChildren(children);
    const id = generateSlug(text);
    return (
      <h2 id={id} className="text-2xl sm:text-[26px] font-bold tracking-tight text-foreground mt-10 mb-4 pb-1 scroll-mt-28">
        {children}
      </h2>
    );
  },
  h3: ({ children }: any) => {
    const text = getTextFromChildren(children);
    const id = generateSlug(text);
    return (
      <h3 id={id} className="text-xl font-semibold tracking-tight text-foreground mt-8 mb-3 scroll-mt-28">
        {children}
      </h3>
    );
  },
  h4: ({ children }: any) => {
    const text = getTextFromChildren(children);
    const id = generateSlug(text);
    return (
      <h4 id={id} className="text-lg font-semibold tracking-tight text-foreground mt-6 mb-2 scroll-mt-28">
        {children}
      </h4>
    );
  },
  p: (props: any) => (
    <p className="text-[15px] sm:text-base leading-7 text-muted-foreground/90 mb-6 font-sans antialiased" {...props} />
  ),
  pre: (props: any) => (
    <pre className="my-6 overflow-x-auto rounded-xl border border-border/60 bg-[#0d1117] p-4 text-sm font-mono leading-6 shadow-md" {...props} />
  ),
  code: (props: any) => {
    const isBlock = props["data-theme"] !== undefined || props.className?.includes("language-");
    if (isBlock) {
      return <code className="font-mono text-[13px] text-zinc-100" {...props} />;
    }
    return (
      <code className="rounded bg-muted/80 px-1.5 py-0.5 font-mono text-[13px] text-emerald-400 dark:text-emerald-300 font-medium" {...props} />
    );
  },
};

export default async function BlogPostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = await getBlogBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content, toc } = post;

  return (
    <div className="w-full text-foreground antialiased font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] gap-12 lg:gap-24">
        
        {/* LEFT COLUMN: Fixed Scroll client-active tracking component */}
        <aside className="hidden md:block">
          <TocSidebar toc={toc} />
        </aside>

        {/* RIGHT COLUMN: Blog Content Display Stream */}
        <main className="max-w-[720px] w-full justify-self-start">
          <div className="space-y-4 mb-12 border-b border-border/40 pb-8">
            <div className="flex flex-wrap gap-1.5">
              {frontmatter.category.map((cat: string, i: number) => (
                <Badge key={i} variant="secondary" className="text-xs font-medium px-2.5 py-0.5">
                  {cat}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl sm:text-[44px] font-extrabold tracking-tight text-foreground leading-[1.15]">
              {frontmatter.title}
            </h1>

            <p className="text-sm text-muted-foreground/80 font-medium pt-1">
              By <span className="text-foreground">{frontmatter.author}</span> • {
                new Date(frontmatter.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })
              }
            </p>
          </div>

          <div className="w-full">
            <MDXRemote 
              source={content} 
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [
                    rehypeSlug,
                    [rehypePrettyCode, prettyCodeOptions],
                  ],
                },
              }} 
            />
          </div>
        </main>
      </div>
    </div>
  );
}