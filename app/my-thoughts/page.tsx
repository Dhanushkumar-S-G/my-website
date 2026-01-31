import { Card_1 } from "@/components/cards/card-1";

const thoughts = [
  "What is trust ? It is your ability to become vulnerable in front of them about someone or something",
  "What is maturity? Things that once excited you, are no more exciting",
  "I think we all need our parents to say go and do what ever you want( pathukalam )in our early 20s.",
  "We should not be blocked by our parents, by asking what is the backup plan you have, atleast until marriage",
  "One day the excess money will turn you evil",
  "Money should always be a by-product of what you are doing, you should always have greed to grow, learn and knowledge but not greed for money",
  "Success isn’t a club that you can enter through inheritance, but inheritance often make the path easier",
  "Truth seeker vs validation seekers",
  "Liking is always result of short term validation while respect is the result of long term- consistent",
  "Your friends circle will change based on your growth.",
  "When a business is down there are two consequences 1. financial 2. loss is customer trust",
  "Some words/emotions loose meaning when spoken late",
  "Know what you want before starting to build your path may change but you must know what is your next step",
  "Leaders poses the ability to simply complex things, put it into a framework or process, to automate it.",
  "Stress comes from not taking actions",
  "Most of the things in stress would be Why am I like this Go ahead and take actions",
  "Nature/ landscapes has the power to manupliate the definition of your success",
  "The Beauty about travelling is that you have to face unexpected things that life throws at you when you put yourself in such situations",
  "Don’t try to catch butterflies, leave it and keep calm, the butterfly will some time come to you https://www.instagram.com/reel/DOvdKXUketj/?igsh=YXNocGl0eXBjcmRt",
  "Anger comes in a situation because you have some form of inability in that situation",
  "(Software ) If your tests are passing, then your tests are poor",
  "Wellness is always cheaper than illness",
  "As a engineer we should always reason from first principles (well know fundamental truths) rather than reasoning from analogy(comparing a problem with to something that appears to be similar).",
  "Try to learn something new everyday, give some new challenge everyday to the brain"
];


export default function MyThoughtsPage() {
  return (
    <main className="flex flex-col py-20 w-full max-w-6xl mx-auto overflow-x-hidden">
      <h1 className="text-4xl font-bold text-center">My Thoughts</h1>

      <p className="mt-4 mx-5 text-center text-sm text-muted-foreground">
        Sometimes I spend some time reflecting on my experiences and sharing them here.
      </p>

      <div className="mt-10 grid w-full max-w-3xl mx-auto px-4 gap-6">
        {thoughts.map((thought, index) => (
          <Card_1 key={index}>
            {thought}
          </Card_1>
        ))}
      </div>
    </main>
  );
}
