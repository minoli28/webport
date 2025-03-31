import { Card, CardContent } from "@/components/ui/card";

/*
    {
        "name": "",
        "title": "",
        "avatarUrl": "",
        "message": ""
    }
*/

interface Recommendation {
    name: string;
    title: string;
    avatarUrl: string;
    message: string;
}

export const recommendations: Recommendation[] = []

export const Recommendations = () => {
    return (
        recommendations.length === 0 ? null :
        <>
            <h2 className="text-xl font-bold my-4">
                Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {recommendations.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={p.avatarUrl}
                                        alt={p.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {p.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {p.title}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                    {p.message}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}