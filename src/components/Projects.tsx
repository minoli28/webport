import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "ConcordiaAI",
        description: "A Rag Chatbot that can answer questions related to courses and instructors at Concordia",
        tech: ["LibreChat Fork"],
        link: "https://chat.concordia.courses",
    },
    {
        title: "Flymile",
        description: "Flight search engine designed for credit card points enthusiasts",
        tech: ["React", "Java"],
        link: "https://flymile.pro",
    },
    {
        title: "Concordia courses",
        description: "A course and instructor review platform for Concordia students like RateMyProfessors, but better",
        tech: ["Svelte", "Java", "Python"],
        link: "https://concordia.courses",
    },
    {
        title: "Visual Schedule Builder Export",
        description: "Google Chrome extension to export Concordia's course schedule from Visual Schedule Builder to your google calendar",
        tech: ["JavaScript"],
        link: "https://chromewebstore.google.com/detail/visual-schedule-builder-e/nbapggbchldhdjckbhdhkhlodokjdoha",
    },
]

const techColors = {
    "React": "bg-blue-500",
    "React Native": "bg-green-500",
    "LibreChat Fork": "bg-green-500",
    "Svelte": "bg-red-500",
    "Python": "bg-yellow-500",
    "JavaScript": "bg-yellow-500",
    "Next.js": "bg-gray-500",
}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech[0] as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech.join(", ")}
                                        </span>
                                    </div>
                                    <Link
                                        href={p.link}
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}