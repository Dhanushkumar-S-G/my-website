import { BlogCard } from "@/components/blog-card";
import {Inspirations} from "./inspirations";



export default function Blogs() {
  return (
    <div className="mx-auto max-w-3xl py-30 prose prose-invert">
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
    </div>
  );
}



