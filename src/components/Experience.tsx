import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
    {
        role: "Software Intern",
        company: "Autodesk",
        logo: "https://static-dc.autodesk.net/etc.clientlibs/v605.20220721.1732/dotcom/clientlibs/clientlib-site/resources/images/favicons/app-icon-192.png",
        duration: "May 2025 - August 2025",
        description:
            "Upcoming internship at Autodesk",
        link: "https://www.autodesk.com",
        images: [],
    },
    {
        role: "Teacher Assistant",
        company: "Concordia University",
        logo: "https://concordia.ca/etc/designs/concordia/clientlibs/img/favicons/apple-touch-icon.png",
        duration: "July 2024 - Present",
        description:
            "Teaching assistant for Object-Oriented Programming, Data Structures and Algorithms courses and Web Development courses.",
        link: "https://ta.beaudelaire.ca",
        images: [],
    },
    {
        role: "Software Developer Intern",
        company: "Straumann Group",
        logo: "https://straumann.com/resources/straumann/apple-touch-icon.png",
        duration: "May 2024 - Aug 2024",
        description:
            "Developed and deployed a new design for the visibility toolkit. Implementing undo/redo throughout the design workflow.",
        link: "https://straumann.com",
        images: [],
    },
    {
        role: "Software Developer Intern",
        company: "Straumann Group",
        logo: "https://straumann.com/resources/straumann/apple-touch-icon.png",
        duration: "Sep 2024 - Dec 2024",
        description:
            "Created test case generation tool which creates random XML docs from XML Schema. Implementing tooth tagging from AI tooth segmentation data.",
        link: "https://straumann.com",
        images: [],
    },
]

export const Experience = () => {
    return (
        <>
           <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Work Experience</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {jobs.map((j, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                {/* Job Details */}
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={j.logo}
                                        alt={j.company}
                                        width={40}
                                        height={40}
                                        className="rounded-md border shadow-md object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {j.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {j.company}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <CalendarDays className="size-3 mr-2"/>
                                    {j.duration}
                                </p>
                                <p className="text-sm mt-2">{j.description}</p>
                                {/* Job Images */}
                                <JobImages 
                                    role={j.role} 
                                    link={j.link}
                                    images={j.images} 
                                    duration={j.duration} 
                                />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}
