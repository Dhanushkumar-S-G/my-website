import { BlogCard } from "@/components/blog-card";
import {Inspirations} from "./inspirations";



export default function Blogs() {
  return (
    <div className="mx-auto max-w-3xl py-30 prose prose-invert">
      <div className="grid grid-cols-1 gap-5">
        < Inspirations />
        <BlogCard
          title="Building Modern UIs: A Deep Dive into Shadcn and React Components"
          description="Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques."
          author="Sarah Chen"
          date="15 Feb 2024"
        />
        <BlogCard
          title="Building Modern UIs: A Deep Dive into Shadcn and React Components"
          description="Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques."
          author="Sarah Chen"
          date="15 Feb 2024"
        />
        <BlogCard
          title="Building Modern UIs: A Deep Dive into Shadcn and React Components"
          description="Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques."
          author="Sarah Chen"
          date="15 Feb 2024"
        />
        <BlogCard
          title="Building Modern UIs: A Deep Dive into Shadcn and React Components"
          description="Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques."
          author="Sarah Chen"
          date="15 Feb 2024"
        />
      </div>
      
      
    </div>
  );
}



