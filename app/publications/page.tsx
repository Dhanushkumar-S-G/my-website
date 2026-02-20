import { MultiAuthorCard } from '@/components/multi-author-card';
const publicatoins = [
  {
    category: ["Book chapter", "Graphene"],
    title: "Synthesis of Graphene Based Nanocomposite from Captured Industrial Carbon",
    description: "This chapter explores the synthesis of graphene-based nanocomposites using captured industrial carbon, highlighting their potential applications and environmental benefits.",
    authors: [
      { tooltip: "Dhanushkumar S G", fallback: "DG" , src:"/dhanush.png"},
      { tooltip: "Dr.A.Geethakarthi", fallback: "GA", src:"/ga.jpeg"},
      { tooltip: "Mirudhula B", fallback: "MB", src:"/mirudhula.jpeg"},
      { tooltip: "Monisha L", fallback: "ML", src:"/monisha.jpeg"},
      { tooltip: "Giftlin K", fallback: "GK", src:"/gift.jpeg"},
      { tooltip: "Sanjaikabilan S", fallback: "SS", src:"/sk.jpeg"}
    ],
    url: "https://link.springer.com/chapter/10.1007/978-981-16-8599-6_6",
    date: "2022"
  }
]


export default function Publications() {
    return (
        <main className="flex flex-col items-center justify-center py-20 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold py-5">My Publications</h1>
            <div className="grid grid-cols-1 gap-5">
                {publicatoins.map((publication, index) => {
                    return (
                        <MultiAuthorCard key={index} {...publication} />
                    )
                })}
            </div>
        </main>
    )
}