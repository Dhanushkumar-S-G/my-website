"use client";
import Timeline, {
  TimelineItem,
  TimelineItemDate,
  TimelineItemTitle,
  TimelineItemDescription
} from "@/components/ui/timeline";
import { Tooltip } from "./ui/tooltip-card";
import { useMediaQuery } from "@mantine/hooks";

const timelineData = [
  {
    title: "Amazon",
    description:
      "Working on developing Network Monitoring Tools and Systems.",
    startDate: new Date("2025-05-05"),
    variant: "default" as const
  },
  {
    title: "Dublin City University",
    description:
      "Did my Master's in Computer Science specializing in Secure Software Engineering.",
    startDate: new Date("2024-09-15"),
    endDate: new Date("2025-04-01"),
    variant: "secondary" as const
  },
  {
    title: "AppviewX",
    description:
      "Worked on building an Ansible-like automation tool that uses JSON instead of YAML, designed to validate VM and machine prerequisites before customer installations.",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    variant: "default" as const
  },
  {
    title: "iQube",
    description:
      "During my college days, I was part of a student Community called iQube where I got to work on various projects and got exposure to real world software development.",
    startDate: new Date("2021-09-10"),
    endDate: new Date("2024-05-10"),
    variant: "secondary" as const
  },
  {
    title: "Kumaraguru College of Technology",
    description:
      "Completed my Bachelor's Degree in Computer Science and Engineering.",
    startDate: new Date("2020-09-10"),
    endDate: new Date("2024-05-10"),
    variant: "default" as const
  },
  // {
  //   title: "Critical Database Failure",
  //   description:
  //     "Data corruption occurred during migration. rollback procedures initiated immediately.",
  //   date: new Date("2023-02-14"),
  //   variant: "destructive" as const
  // },
  // {
  //   title: "Beta Launch",
  //   description:
  //     "System stabilized and released to the first batch of 500 internal users.",
  //   date: new Date("2023-03-01"),
  //   variant: "default" as const
  // }
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// const TestimonialCard = () => {
//   return (
//     <div className="">
//       <blockquote className="mb-4 text-neutral-700 dark:text-neutral-300">
//         This product is absolutely, grade A horse shit.
//       </blockquote>
//       <div className="flex items-center gap-2">
//         <img
//           src="https://assets.aceternity.com/screenshots/tyler.webp"
//           alt="Tyler Durden"
//           className="size-6 rounded-full object-cover"
//         />
//         <div>
//           <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
//             Tyler Durden
//           </p>
//           <p className="text-[10px] text-neutral-600 dark:text-neutral-400">
//             Senior Product Manager at FC
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };


export function TimelineNoCardsDemo() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    isMobile ? <></> :
    <Timeline orientation="vertical">
      {timelineData.map((item, idx) => (
        <TimelineItem key={idx} variant={item.variant}>
          <TimelineItemDate>{`${months[item.startDate.getMonth()]} ${item.startDate.getFullYear().toString()} - ${item?.endDate ? `${months[item.endDate.getMonth()]} ${item.endDate.getFullYear().toString()}` : "Present"}`}</TimelineItemDate> 
          <TimelineItemTitle>{item.title}</TimelineItemTitle>
          <TimelineItemDescription>{item.description}</TimelineItemDescription>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
