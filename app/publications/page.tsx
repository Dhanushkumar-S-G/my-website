import { MultiAuthorCard } from '@/components/multi-author-card';
const publicatoins = [
  {
    category: ["Book chapter", "Graphene"],
    title: "Synthesis of Graphene Based Nanocomposite from Captured Industrial Carbon",
    description: "This chapter explores the synthesis of graphene-based nanocomposites using captured industrial carbon, highlighting their potential applications and environmental benefits.",
    authors: [
      { tooltip: "Dhanushkumar S G", fallback: "DG" , src:"https://media.licdn.com/dms/image/v2/D5603AQEqMbpiaa2A4w/profile-displayphoto-scale_400_400/B56ZoaxRxvJwAg-/0/1761385717612?e=1772064000&v=beta&t=3lUv4EIH6F4TD7NHnxSQojgpb9j3SRhIBr5mB7opL_c"},
      { tooltip: "Dr.A.Geethakarthi", fallback: "GA", src:"https://media.licdn.com/dms/image/v2/C5603AQGRpQeWQk_vNw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1602161218589?e=1772064000&v=beta&t=gfJZ9-kTST9PvhNo0Sv6MQJMEyPb_WIZeRUzEvwVJ8o"},
      { tooltip: "Mirudhula B", fallback: "MB", src:"https://media.licdn.com/dms/image/v2/D5603AQFqaGGKQozzHA/profile-displayphoto-shrink_400_400/B56ZWaHluIHQAg-/0/1742047436927?e=1772064000&v=beta&t=BLS2QoCy4m_s_iGVYvV_qtPdi-EGLYY69riFD5o4nCk"},
      { tooltip: "Monisha L", fallback: "ML", src:"https://media.licdn.com/dms/image/v2/D5603AQGc7RMBZKpA7w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708702505173?e=1772064000&v=beta&t=l9JeiiGWB9rKnwuAKu4aUQpsELyEE9dbq-tDFqo3E0U"},
      { tooltip: "Giftlin K", fallback: "GK", src:"https://media.licdn.com/dms/image/v2/D5603AQF7tLShdpbfsQ/profile-displayphoto-shrink_400_400/B56ZlL7gM_G4Ag-/0/1757915515476?e=1772064000&v=beta&t=RUeclX2eR6RVsmmo1SaefgU1foiMMjr7l9Y23OBTT5o"},
      { tooltip: "Sanjaikabilan S", fallback: "SS", src:"https://media.licdn.com/dms/image/v2/D5603AQEfgVqlRlYp8g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718352862999?e=1772064000&v=beta&t=64_DfcGyRqF_uwsJVeTdWDtcK6dBr_JZzbKqNeLMIwk"}
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