import { SectionWrapper } from "@/components/section-wrapper"
import { ExperienceCard } from "@/components/experience-card"
import { EducationCard } from "@/components/education-card"
import { Briefcase, Award } from "lucide-react"

export function ExperienceSection() {
  const experience = [
    {
      title: "System Engineer",
      company: "Wipro Ltd",
      period: "Feb 2024 – Present",
      responsibilities: [
        "Managing Windows servers, Active Directory, and user accounts",
        "Handling system upgrades, patch management, and desktop support",
        "Monitoring system performance and resolving issues",
        "Providing L1/L2 support for hardware/software/network issues",
      ],
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Service Desk Associate",
      company: "Whirlpool Corporation",
      period: "Feb 2023 – Jan 2024",
      responsibilities: [
        "First-level IT support for 5000+ users",
        "Resolved hardware/software issues via ServiceNow",
        "Installed and configured desktops/laptops",
        "Assisted with password resets, network access, and printer support",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <SectionWrapper
      id="experience"
      title="Professional Journey"
      subtitle="Building expertise through hands-on experience in enterprise IT environments"
      dark
    >
      <div className="max-w-6xl mx-auto">
        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-blue-400" />
            Work Experience
          </h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <ExperienceCard key={index} {...job} index={index} />
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          <EducationCard />
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-purple-400" />
              Certifications
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "AWS Certified Cloud Practitioner",
                  issuer: "Amazon Web Services",
                  icon: "☁️",
                  color: "from-orange-500 to-red-500",
                },
                {
                  title: "ITIL Foundation",
                  issuer: "IT Service Management",
                  icon: "🛡️",
                  color: "from-blue-500 to-indigo-500",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-slate-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
