import Image from "next/image";
import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { JobImages } from "@/components/JobImages";
import { resumeData } from "@/data/resume";

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
        Work Experience
      </h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {resumeData.jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    unoptimized
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <div className="text-sm mt-2">
                  {j.description.map((item, idx) => (
                    <p key={idx} className="mb-1">{item}</p>
                  ))}
                </div>
                {/* Job Images */}
                <JobImages
                  role={j.role}
                  link={j.link ?? ""}
                  images={j.images ?? []}
                  duration={j.duration}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
