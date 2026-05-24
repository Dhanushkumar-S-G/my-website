"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Utility function to convert a title into a URL-friendly slug
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove non-word characters (like @, etc)
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with a single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};

export default function BlogPost() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    // We now select by class name since the IDs are dynamic words instead of "section-X"
    const sections = document.querySelectorAll(".blog-section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="w-full text-foreground selection:bg-primary/30 antialiased font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-12 lg:gap-24">
        
        {/* LEFT COLUMN: Docs-Style Tracker */}
        <aside className="hidden md:block">
          {/* Added a subtle backdrop-blur so the text remains readable if it scrolls over your dot pattern */}
          <div className="sticky top-24 p-4 -ml-4 rounded-xl bg-background/50 backdrop-blur-md border border-transparent hover:border-border/50 transition-colors duration-300">
            <h3 className="text-sm font-semibold text-foreground mb-4 tracking-tight">
              On this page
            </h3>
            <nav className="flex flex-col space-y-2.5 border-l border-border/60">
              {dummyContent.map((item, index) => {
                // Generate the slug from the title
                const sectionId = generateSlug(item.title);
                const isActive = activeId === sectionId;

                return (
                  <a
                    key={`nav-${index}`}
                    href={`#${sectionId}`}
                    className={`pl-4 text-[13px] leading-5 transition-colors duration-200 ${
                      isActive
                        ? "text-foreground font-medium border-l border-primary -ml-[1px]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="line-clamp-2">{item.title}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* RIGHT COLUMN: Main Content Area */}
        <main className="max-w-[700px]">
          <h1 className="text-4xl font-extrabold tracking-tight mb-6 text-foreground text-center">
            More About Me
          </h1>

          <div className="space-y-12">
            {dummyContent.map((item, index) => {
              // Generate the same slug for the section ID
              const sectionId = generateSlug(item.title);

              return (
                <section 
                  key={`content-${index}`} 
                  id={sectionId}
                  className="blog-section scroll-mt-28" 
                >
                  <h2 className="text-2xl sm:text-[26px] font-semibold tracking-tight text-foreground mb-6">
                    {item.title}
                  </h2>
                  
                  <div className="prose prose-neutral dark:prose-invert max-w-none 
                                  prose-p:leading-7 prose-p:mb-6 prose-p:text-[15px] sm:prose-p:text-base 
                                  text-muted-foreground/80
                                  prose-headings:font-semibold prose-headings:tracking-tight">
                    {item?.image && (
                      <div className="my-8 rounded-lg overflow-hidden border border-border/50 bg-muted/10 shadow-sm">
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          width={1000} 
                          height={600} 
                          className="w-full object-cover m-0" 
                        />
                      </div>
                    )}
                    {item.description}
                  </div>
                </section>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

const dummyContent = [
  {
    title: "The Story Behind My College Years",
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
    title: "My Master's at Dublin City University",
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
