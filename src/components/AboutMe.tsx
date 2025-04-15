'use client'
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";


export const AboutMe = () => {
    const isDesktopOrLaptop  = useMediaQuery("(min-width: 1224px)");
    return (    

    <Card className="mb-6">
        <CardHeader className="flex flex-row justify-between items-baseline">
            <CardTitle>About Me</CardTitle>
            {isDesktopOrLaptop && <ThemeSwitcher />}
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
                {/* Write 1-2 sentences about yourself */}
                Industrial engineer based in Montreal, passionate about process optimization, AI applications, and strategic operations. With hands-on experience leading tech-driven projects; including a $300K initiative at GoBolt managing 70+ staff. I specialize in driving operational excellence and cost efficiency. A lifelong learner and problem-solver, I am eager to keep applying innovative solutions and collaborating with forward-thinking teams to create real impact.
            </p>
        </CardContent>
    </Card>
    )
}