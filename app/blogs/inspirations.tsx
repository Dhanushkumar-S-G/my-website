"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink } from 'lucide-react';
import { Card as CardType } from "@/components/ui/card-stack";
export function Inspirations() {
  return (
    <div className="h-auto flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-medium rounded-sm px-1 py-0.5 \
         bg-[#9441F5]/18 text-[#7A3FEA] \
         dark:bg-[#9441F5]/25 dark:text-[#C9A8FF]",
        className
      )}
    >
      {children}
    </span>
  );
};



const CARDS = [
  {
    id: 0,
    name: <div className="flex items-center gap-2">
          <Link
            href="https://x.com/akshaymarch7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 cursor-pointer hover:underline"
          >
            Akshay Saini
            <ExternalLink size={16} />
          </Link>
        </div>,
    designation: "Software Engineer",
    content: (
      <p>
        Want to truly learn? 
        Write about what you know. 

        <Highlight className="">You’ll realize how much you don’t.</Highlight>
      </p>
    ),
  }
] as CardType [];
