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
                Industrial engineer based in Montreal with a strong focus on AI, operations optimization, 
                and intelligent systems design. I combine engineering principles with emerging technologies to improve efficiency, 
                reduce costs, and build scalable solutions. 
                I've led high-impact operational projects—including a $300K process improvement initiative at GoBolt overseeing a team of 70+ staff and have hands-on experience designing automation tools, 
                building early AI models, and applying quantitative methods to real operational challenges. A problem-solver at heart and a lifelong learner, 
                I am continuously exploring ways to integrate AI, data, and complex operations to create systems that think, evolve, and deliver real-world value. 
                I thrive in fast-paced environments and enjoy collaborating with teams that push boundaries and build what others think is impossible.
            </p>
        </CardContent>
    </Card>
    )
}