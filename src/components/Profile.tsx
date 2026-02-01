"use client";
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@/hook/useMediaQuery";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { resumeData } from "@/data/resume";

export const Profile = () => {
    const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");

    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-2 ">
                    <div className="flex w-full flex-row justify-between items-top ">
                        <div className="flex w-full flex-row items-center gap-4 md:flex-col md:items-start">
                            <Image
                                width={150}
                                height={150}
                                quality={100}
                                src={resumeData.avatarUrl}
                                alt="Profile Picture"
                                className="size-12 rounded-full border-2 object-cover md:h-auto md:w-full"
                            />
                            <div className="flex flex-col items-start justify-center">
                                <h1 className="font-bold md:mt-4 text-xl md:text-2xl">
                                    {resumeData.name}
                                </h1>
                                <p className="text-sm md:text-base text-muted-foreground">
                                    {resumeData.title}
                                </p>
                            </div>
                        </div>
                        <ThemeSwitcher />
                    </div>

                    <p className="mt-2 text-start text-sm text-muted-foreground">
                        {resumeData.bio}
                    </p>
                    <Button className="mt-4 w-full" asChild>
                        <Link
                            href="https://cal.com/mrmos"
                            target="_blank"
                            className="font-semibold uppercase"
                        >
                            BOOK TIME WITH ME
                        </Link>
                    </Button>
                    <div className="mt-4 flex w-full flex-col space-y-2 border-t border-border pt-4">
                        {resumeData.socials.map((s, i) => {
                            const parts = s.link.split("/");
                            const username = parts[parts.length - 1];

                            return (
                                <Link
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    className="group flex cursor-pointer items-center gap-2"
                                >
                                    <s.icon className="size-4" />
                                    <span className="text-sm text-muted-foreground transition-colors duration-200 ease-linear group-hover:text-primary">
                                        /{username}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};