import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface SkillCardProps {
  title: string
  skills: string[]
  icon: LucideIcon
  color: string
  index: number
}

export function SkillCard({ title, skills, icon: Icon, color, index }: SkillCardProps) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 shadow-xl hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-500 group hover:scale-105">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-white group-hover:text-blue-400 transition-colors duration-300">
          <div
            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="bg-slate-700/50 text-slate-300 hover:bg-blue-500/20 hover:text-blue-300 border border-slate-600 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105"
              style={{
                animationDelay: `${index * 0.1 + idx * 0.1}s`,
              }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
