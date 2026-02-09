
import { MultiAuthorCard } from "@/components/multi-author-card";
import Image from "next/image";



export default function Papers() {
  return (
    <div className="flex flex-col items-center justify-center py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold">My PaperShelf</h1>
      <p className="mt-4 text-md text-center text-muted-foreground mx-5">
        As a software engineer I know the importance of reading papers and implementing them, Unfortunately I have tried reading papers and have failed to complete them 😔😔. But still am going to try again !!
      </p>

      <Image
        src="/cat.jpg"
        alt="Under Construction"
        width={500}
        height={500}
        className="mt-10"
      />
    </div>
  );
}