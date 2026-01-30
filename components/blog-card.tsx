import { ArrowRight } from "lucide-react"
import Link from "next/link";

type BlogCardProps = {
  category?: string
  subCategory?: string
  title: string
  description: string
  author: string
  date: string
}


export function BlogCard({
  category = "WEB DESIGN",
  subCategory = "UI DEVELOPMENT",
  title,
  description,
  author,
  date,
}: BlogCardProps) {
  return (
    <div className="grid grid-cols-1 gap-8 rounded-2xl border bg-background p-8 mx-4 md:mx-0">
      {/* Left content */}
      <div className="flex flex-col justify-between">
        <div>
          {/* Categories */}
          <div className="mb-4 flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span>{category}</span>
            <span>{subCategory}</span>
          </div>

          {/* Title */}
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {title}
          </h2>

          {/* Description */}
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Meta + CTA */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{author}</span>
            <span className="mx-2">•</span>
            {date}
          </p>

          <Link
            href="/blog/shadcn-react"
            className="
              group inline-flex cursor-pointer items-center gap-2
              text-sm font-medium
              underline-offset-4
              hover:underline
            "
          >
            Read more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
