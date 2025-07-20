import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Network, Code, Rocket } from "lucide-react"

export function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects Showcase"
      subtitle="Innovative solutions and technical implementations coming soon"
      dark
    >
      <div className="max-w-4xl mx-auto">
        <Card className="bg-slate-800/50 border-slate-700 shadow-2xl hover:bg-slate-700/50 transition-all duration-500 group">
          <CardContent className="p-12 text-center">
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 bg-slate-800 rounded-xl flex items-center justify-center">
                  <Network className="w-10 h-10 text-blue-400" />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
              Exciting Projects in Development
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              I'm currently working on innovative projects that showcase my expertise in system engineering, cloud
              infrastructure, and IT automation. These projects will demonstrate real-world applications of modern IT
              solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["System Automation", "Cloud Migration", "Infrastructure Monitoring", "Service Desk Optimization"].map(
                (tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ),
              )}
            </div>

            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Code className="w-5 h-5" />
                <span>In Development</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Rocket className="w-5 h-5" />
                <span>Coming Soon</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  )
}
