"use client";
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";
import { resumeData } from "@/data/resume";

export const AboutMe = () => {
    const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
    return (
        <Card className="mb-6">
            <CardHeader className="flex flex-row items-baseline justify-between">
                <CardTitle>About Me</CardTitle>
                {isDesktopOrLaptop && <ThemeSwitcher />}
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    {resumeData.bio}
                </p>
            </CardContent>
        </Card>
    );
};