import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";
//import { Description } from "@radix-ui/react-dialog";
//import { link } from "fs";

const jobs = [
    {
      role: 'Area Manager',
      company: 'GoBolt',
      employmentType: 'Permanent Full-time',
      location: 'Montreal, Quebec, Canada',
      workMode: '',
      startDate: 'May 2022',
      endDate: 'Apr 2024',
      link: '',
      images: [],
      duration: 'May 2022 - Apr 2024',
      description: [
        "•  Analyzed logistics performance through SAP, Power BI, and Google Looker, achieving 95% On-Time-In-Full delivery rate\n",
        "•  Led optimization of last-mile delivery and electric vehicle (EV) routing using Samsara, Geotab, and Google Maps API, reducing delivery time by 15%\n",
        "•  Managed transportation fleet, route planning, budgeting, and service-level performance making Montreal Branch the best perfoming market among other branches\n",
        "•  Oversaw employee performance, attendance, and applied disciplinary measures to maintain high team standards\n",
        "•  Enforced and improved site health and safety protocols by identifying operational risks and implementing preventative measures\n",
        "•  Conducted strategic labor, fleet, and cost forecasting to reduce overall logistics expenses\n",
        "•  Mitigated operational risks and optimized service quality, significantly reducing emergency logistics costs\n",
        "•  Successfully led projects from planning through execution in a high-growth logistics environment\n"
      ],
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQHrN4DVuns3Mg/company-logo_100_100/company-logo_100_100/0/1651581286082/go_bolt_logo?e=1747872000&v=beta&t=9u2DCRZ0DBhYORJ1HznZtDENMSyyVKjH-__OkKRwyws'
    },
    {
      role: 'Operations Team Lead - Warehousing & Transportation Systems',
      company: 'GoBolt',
      employmentType: 'Permanent Full-time',
      location: 'Canada',
      workMode: '',
      startDate: 'Sep 2021',
      endDate: 'May 2022',
      duration: 'Sep 2021 - May 2022',
      description: `• Led end-to-end routing optimization, team assignments, and fleet management to streamline last-mile delivery operations\n• Built and implemented low-level traffic prediction models, reducing unnecessary routes and improving ETA accuracy\n• Automated performance dashboards and reports using Power BI and Jira, cutting analysis time by 30%\n• Spearheaded training, coaching, and performance management initiatives, boosting team efficiency and service quality\n• Oversaw reverse logistics workflows, reducing return errors by 15% through improved process controls\n• Resolved labor disputes, managed shift planning, and optimized workforce allocation across multiple logistics hubs\n• Handled B2B client escalations and maintained strong partner relationships to ensure high service-level standards`,
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQHrN4DVuns3Mg/company-logo_100_100/company-logo_100_100/0/1651581286082/go_bolt_logo?e=1747872000&v=beta&t=9u2DCRZ0DBhYORJ1HznZtDENMSyyVKjH-__OkKRwyws'
    },
    {
      role: 'Logistics planning and optimization intern',
      company: 'GoBolt',
      employmentType: 'Internship',
      location: 'Canada',
      workMode: '',
      startDate: 'May 2021',
      endDate: 'Sep 2021',
      duration: 'May 2021 - Sep 2021',
      description: `• Analyzed and improved logistics processes, including WMS and predictive analysis\n• Collaborated with HSE, warehousing, and business analytics teams using the SMART system`,
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQHrN4DVuns3Mg/company-logo_100_100/company-logo_100_100/0/1651581286082/go_bolt_logo?e=1747872000&v=beta&t=9u2DCRZ0DBhYORJ1HznZtDENMSyyVKjH-__OkKRwyws'
    },
    {
      role: 'Operational Specialist',
      company: 'GoBolt',
      employmentType: 'Permanent Part-time',
      location: 'Montreal, Quebec, Canada',
      workMode: '',
      startDate: 'Apr 2020',
      endDate: 'May 2021',
      duration: 'Apr 2020 - May 2021',
      description: `• Ensured proper loadout of delivery vehicle and adherence to operational procedures\n• Delivered excellent customer service during deliveries and onsite interactions\n• Supported onboarding and guided new recruits in daily tasks and best practices`,
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQHrN4DVuns3Mg/company-logo_100_100/company-logo_100_100/0/1651581286082/go_bolt_logo?e=1747872000&v=beta&t=9u2DCRZ0DBhYORJ1HznZtDENMSyyVKjH-__OkKRwyws'
    }
  ];

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
                                <p className="text-sm mt-2 whitespace-pre-line">{j.description}</p>
                                {/* Job Images */}
                                <JobImages 
                                    role={j.role} 
                                    link={j.link ?? ''}
                                    images={j.images ?? []}
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
