"use client"
import { ArrowRight } from "lucide-react"
import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "./ui/avatar";
import { AvatarGroupTooltip } from "./animate-ui/components/animate/avatar-group";
import { TooltipProvider } from "@/components/animate-ui/components/animate/tooltip";

type BlogCardProps = {
  category?: string[]
  title: string
  description: string
  authors: Author[]
  date: string
  url: string
}

type Author = {
    src: string,
    fallback: string,
    tooltip: string
}


export function MultiAuthorCard({
  category,
  title,
  description,
  authors,
  date,
  url,
}: BlogCardProps) {
  return (
    <div className="grid grid-cols-1 gap-8 rounded-2xl border bg-background p-8 mx-4 md:mx-0">
      {/* Left content */}
      <div className="flex flex-col justify-between">
        <div>
          {/* Categories */}
          <div className="mb-4 flex items-center gap-1">
            {category?.map((cat, index) => (
              <Badge key={index} variant="secondary">
                {cat}
              </Badge>
            ))}
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
            <AvatarGroup>
                {authors.map((avatar, index) => (
                    <Avatar key={index} className="size-12 border-3 border-background">
                    <AvatarImage src={avatar.src} />
                    <AvatarFallback>{avatar.fallback}</AvatarFallback>
                    {/* <AvatarGroupTooltip>{avatar.tooltip}</AvatarGroupTooltip> */}
                    </Avatar>
                ))}
            </AvatarGroup>

          <Link
            href={url}
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
