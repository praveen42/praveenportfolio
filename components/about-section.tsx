import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Server, Monitor, Cloud } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Server,
      title: "System Engineering",
      description: "Windows Server Management & Active Directory",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Monitor,
      title: "Service Desk",
      description: "L1/L2 Support for 5000+ Users",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cloud,
      title: "Cloud Technologies",
      description: "AWS Services & Infrastructure",
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Passionate IT professional dedicated to excellence in system engineering and infrastructure management"
    >
      <div className="max-w-6xl mx-auto">
        <Card className="bg-slate-800/50 border-slate-700 shadow-2xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-500 group">
          <CardContent className="p-8 md:p-12">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 text-center">
              Motivated and detail-oriented IT professional with{" "}
              <span className="text-blue-400 font-semibold">2.5 years of experience</span> in system engineering and
              service desk support. Proficient in managing IT infrastructure, troubleshooting, and ensuring system
              uptime. Demonstrated ability to deliver reliable technical support and contribute to cloud and
              infrastructure projects.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((item, index) => (
                <div key={index} className="text-center group/item hover:scale-105 transition-all duration-300">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 group-hover/item:shadow-lg group-hover/item:shadow-blue-500/25 transition-all duration-300`}
                  >
                    <div className="w-full h-full bg-slate-800 rounded-2xl flex items-center justify-center group-hover/item:bg-slate-700 transition-colors duration-300">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover/item:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 group-hover/item:text-slate-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  )
}
