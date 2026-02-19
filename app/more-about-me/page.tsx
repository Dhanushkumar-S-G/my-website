"use client";
import Image from "next/image";


export default function MoreAboutMe() {
  return (
    <div className="flex flex-col items-center justify-center py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold">More About Me</h1>
      <MoreAboutMeContent />
    </div>
  );
}


export function MoreAboutMeContent() {
  return (
      <div className="px-2 max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
          
            <p className="text-lg font-semibold mb-4">
              {item.title}

            </p>

            <div className="text-justify prose prose-sm dark:prose-invert leading-relaxed">
              {item?.image && (
                <Image src={item.image} alt="blog thumbnail" width={1000} height={1000} className="rounded-lg mb-10 object-cover" />
              
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
  );
}

const dummyContent = [
  {
    title: "My College Journey @ Kumaraguru College of Technology",
    description: (
      <>
        <p>
          My journey towards software development began during my freshman year at Kumaraguru
          College of Technology, where I had the opportunity to be a part of a learning stream known as
          PBL (Project-Based Learning). Here I was put into a team of five members from different
          disciplines, and we were given real-world problems to solve. So, me and my team published a
          book chapter under the guidance of my project mentor (GEETHAKARTHI A) on the topic
          “Synthesis of Graphene-Based Nanocomposite from Captured Industrial Carbon". During my
          second semester, I was working on the problem statement of reducing the price of farming
          essentials. Our solution was to build a one-stop-shop web application for farmers to buy their
          needs at the minimum cost possible. This was when I was first exposed to the world of software
          development.
        </p><br />
        <p>
          During my sophomore and junior years, I joined a student community at my college named
          iQube as a software developer. I have been involved in various projects that have allowed me to
          enhance my technical proficiency and gain hands-on experience. I have also participated in
          hackathons conducted by the police departments of Tamil Nadu and Karnataka. I built an OSINT
          tool that helps police gather as much public information as possible about the person under
          suspicion.
        </p><br />
        <p>
          One of my notable achievements at iQube was the development and maintenance of a web
          application for automating my college's admissions process. This application, used by over
          16,000 users annually, significantly reduced manual work by 65%. Additionally, I implemented
          an online yoga teaching platform with a client-side trained model, ensuring high performance
          and a seamless user experience. These projects have not only sharpened my technical skills but
          have also reinforced my passion for software development. 
        </p>
          <br />
        <p>In addition to my projects, I have actively engaged in cocurricular activities that have complimented my learning journey. I have a
          keen interest in video editing and even started my own YouTube channel. While I have not been
          able to grab a significant amount of user attention, this endeavor has allowed me to explore my
          creative side and improve my video editing skills. Furthermore, I took the initiative and led the
          building of a WhatsApp messaging service for my college’s techno-cultural festival called
          Yugam, which served as a communication platform for over 12,000 users for which I have been
          awarded the G.D. Naidu award as best volunteer award for volunteering in my college’s
          techno-cultural festival.
        </p>
      </>
    ),
    badge: "React",
    image:
      "/college.png",
  },
  {
    title: "My First Internship at AppViewX",
    description: (
      <>
        <p>
          During my final year of college, I got placed in campus placements at a startup called AppViewX. 
          I interned there for a period of 6 months as part of the Install and Upgrade team. 
          During my internship, I developed a lightweight prerequisite assessment tool for Kubernetes 
          cluster nodes that checks if tools and configurations are ready, reports issues, and suggests fixes, 
          reducing installation issues by up to 65%. This experience allowed me to apply my knowledge in a real-world setting and gain valuable industry experience.
          I had the opportunity dive deep into the life cycle of SSL certificates and the various tools and configurations that are required to manage them.
        </p>
      </>
    ),
    badge: "React",
    image:
      "/appviewx.png",
  },
  {
    title: "My Master's Journey @ Dublin City University",
    description: (
      <>
        <p>
          After completing my undergraduate studies, I decided to pursue a master's degree in Secure Software Engineering at Dublin City University.
          Where I got to learn about various aspects of software engineering inlcuding Secure Programming, Testing, Concurrent Programming etc.
          Overall, my master's journey at DCU has been a transformative experience that has helped me grow both personally and professionally.
        </p>
      </>
    ),
    badge: "React",
    image:
      "/masters.png",
  },
  {
    title: "Amazon - My Current Journey",
    description: (
      <>
        <p>
          During my master's, I was interviewing at various companies and I got an offer from Amazon to work as a Software Development Engineer. I am currently working at Amazon, where I design and build network monitoring systems that operate at scale. I enjoy diving deep into engineering problems, reasoning about system behavior from first principles, and designing solutions that are robust, scalable, and operationally sound.      
        </p>
      </>
    ),
    badge: "React",
    image:
      "/amazon.png",
  },
];
