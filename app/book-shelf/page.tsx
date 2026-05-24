import { BlogCard } from "@/components/blog-card";

const books = [
  {
    title: "Atomic Habits",
    description:
      "An Easy & Proven Way to Build Good Habits & Break Bad Ones by James Clear",
    authorName: "By, James Clear",
    authorRole: "Author",
    authorImage:
      "https://denisonbigred.com/images/2024/4/23/james-clear.png",
  }
]

export default function Books() {
  return (
    <main className="flex flex-col items-center justify-center py-20 max-w-6xl mx-auto">
      <div className="mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground text-center">
            My BookShelf
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed text-center mx-auto">
            Eventhough I am not an avid reader, I do try to read books from time to time. Here are some of the books that I have read and would recommend.
          </p>
        </div>
      <div className="grid w-automax-w-3xl gap-6">
          {books.map((book, index) => (
            <BlogCard
              category={["Habits", "Productivity"]}
              title={book.title}
              description={book.description}
              author={book.authorName}
              date="2024"
              url="https://www.amazon.co.uk/Atomic-Habits-Proven-Build-Break/dp/1847941834"
            />
          ))}
      </div>
    </main>
  );
}