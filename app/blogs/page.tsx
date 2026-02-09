"use client"
import { BlogCard } from "@/components/blog-card";
import {Inspirations} from "./inspirations";
import { MultiAuthorCard } from "@/components/multi-author-card";




export default function Blogs() {
  return (
    <main className="flex flex-col items-center justify-center py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold py-5">My Blogs</h1>
      <div className="grid grid-cols-1 gap-5">
        < Inspirations />
        <BlogCard
          category={["Tools", "Software"]}
          title="CLI vs REPL"
          description="In this blog, we explore the differences between Command Line Interfaces (CLI) and Read-Eval-Print Loops (REPL)."
          author="Dhanushkumar"
          date="15 Mar 2025"
          url="https://dhanushkumarsg.substack.com/p/cli-vs-repl"
        />
        
      </div>
    </main>
  );
}



