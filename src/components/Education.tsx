import Image from "next/image";
import { GraduationCap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resume";

export const Education = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white flex items-center gap-2">
                <GraduationCap className="size-6" /> Education
            </h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {resumeData.education.map((e, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={e.logo}
                                        alt={e.school}
                                        width={40}
                                        height={40}
                                        unoptimized
                                        className="rounded-md border shadow-md object-cover bg-white"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{e.school}</h3>
                                        <p className="text-sm text-muted-foreground">{e.degree}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    {e.endDate}
                                </p>
                                <div className="text-sm mt-2">
                                    {e.description.map((item, idx) => (
                                        <p key={idx} className="mb-1">{item}</p>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    );
};
