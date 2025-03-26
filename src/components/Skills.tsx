import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// TODO: Update skills
const skills = [
    "Python (NumPy, Pandas, Matplotlib)", 
    "C++",
    "Six Sigma",
    "Continuous Improvement",
    "Power BI", 
    "SAP (Supply Chain Management)", 
    "Google Looker", 
    "Jira", 
    "Arena Simulation", 
    "SolidWorks", 
    "WMS (Warehouse Management System)", 
    "Predictive Analysis (Demand Forecasting)", 
    "Reverse Logistics Planning", 
    "Fleet & Route Optimization", 
    "Electric Vehicle Routing", 
    "Samsara", 
    "Geotab", 
    "Google Maps API", 
    "Cost-Benefit Analysis", 
    "Root Cause Analysis", 
    "Service Quality Improvement", 
    "Change Management", 
    "Project Management", 
    "Team Leadership"
  ]

export const Skills = () => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge key={i} variant="secondary">{s}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}