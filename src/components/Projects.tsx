"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/data/resume";

const techColors = {
    React: "bg-blue-500",
    "React Native": "bg-green-500",
    "LibreChat Fork": "bg-green-500",
    Svelte: "bg-red-500",
    Python: "bg-yellow-500",
    JavaScript: "bg-yellow-500",
    "Next.js": "bg-gray-500",
    "Arena Simulation": "bg-purple-500",
    "Operations Research": "bg-pink-500",
};

export const Projects = () => {
    const [filter, setFilter] = useState("All");

    const projects = resumeData.projects;

    // Get unique tech stacks for filter buttons
    const allTechs = Array.from(new Set(projects.flatMap((p) => p.tech)));
    const filters = ["All", ...allTechs];

    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter((p) => p.tech.includes(filter));

    return projects.length === 0 ? null : (
        <>
            <h2 className="text-xl font-bold mb-4">Featured Projects</h2>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
                {filters.map((f) => (
                    <Badge
                        key={f}
                        variant={filter === f ? "default" : "secondary"}
                        className="cursor-pointer hover:bg-primary/90"
                        onClick={() => setFilter(f)}
                    >
                        {f}
                    </Badge>
                ))}
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <AnimatePresence>
                    {filteredProjects.map((p) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            layout
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow duration-200">
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
                                                        techColors[p.tech[0] as keyof typeof techColors] || "bg-gray-500"
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
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </>
    );
};