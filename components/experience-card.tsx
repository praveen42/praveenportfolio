import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  responsibilities: string[]
  color: string
  index: number
}

export function ExperienceCard({ title, company, period, responsibilities, color, index }: ExperienceCardProps) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 shadow-xl hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-500 group hover:scale-[1.02]">
      <CardHeader className={`bg-gradient-to-r ${color} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <CardTitle className="flex items-center gap-3 text-xl">
            <Briefcase className="w-5 h-5" />
            {title}
          </CardTitle>
          <CardDescription className="text-blue-100 font-medium">
            {company} • {period}
          </CardDescription>
        </div>
        <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="space-y-3">
          {responsibilities.map((resp, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
              style={{
                animationDelay: `${index * 0.1 + idx * 0.1}s`,
              }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-blue-300 transition-colors duration-300"></div>
              <span className="leading-relaxed">{resp}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
