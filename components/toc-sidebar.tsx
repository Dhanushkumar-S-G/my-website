"use client";

import { useEffect, useState } from "react";

interface TocItem {
  level: number;
  title: string;
  id: string;
}

interface TocSidebarProps {
  toc: TocItem[];
}

export function TocSidebar({ toc }: TocSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (toc.length === 0) return;

    // Track which heading is currently visible on the screen
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the element currently intersecting near the top of viewport
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { 
        // Trigger a change when heading is 28% from top of screen (matching scroll-mt)
        rootMargin: "-110px 0px -70% 0px",
        threshold: 0.1 
      }
    );

    // Track every heading item parsed from MDX
    toc.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Perform smooth scrolling alignment natively
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Push history state so browser backward arrows work predictably
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  return (
    <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-4">
        On this page
      </h3>
      {toc.length > 0 ? (
        <nav className="flex flex-col space-y-2 border-l border-border/40 relative">
          {toc.map((heading, idx) => {
            const isActive = activeId === heading.id;

            // Indentation logic shifts
            const indentClass = 
              heading.level === 1 ? "pl-3 font-medium" :
              heading.level === 3 ? "pl-7 text-xs" :
              heading.level >= 4 ? "pl-9 text-[11px]" : 
              "pl-4"; // H2 default

            return (
              <a
                key={idx}
                href={`#${heading.id}`}
                onClick={(e) => handleScrollClick(e, heading.id)}
                className={`text-[13px] py-0.5 leading-5 transition-all duration-200 border-l -ml-[1px] ${indentClass} ${
                  isActive
                    ? "text-primary border-primary font-medium bg-primary/5 dark:bg-primary/10 rounded-r-md pr-2"
                    : "text-muted-foreground/80 border-transparent hover:text-foreground hover:border-border"
                }`}
              >
                <span className="line-clamp-2">{heading.title}</span>
              </a>
            );
          })}
        </nav>
      ) : (
        <p className="text-xs text-muted-foreground italic">Overview</p>
      )}
    </div>
  );
}