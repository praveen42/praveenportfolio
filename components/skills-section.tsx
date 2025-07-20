import { SectionWrapper } from "@/components/section-wrapper"
import { SkillCard } from "@/components/skill-card"
import { Server, Monitor, Network, Cloud, Database, Shield } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Operating Systems",
      skills: ["Windows 10/11", "Windows Server 2016/2019"],
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Tools & Platforms",
      skills: ["ServiceNow", "Active Directory", "Remote Desktop"],
      icon: Server,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Networking",
      skills: ["TCP/IP", "DNS", "DHCP", "VPN (Basic)"],
      icon: Network,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Cloud Technologies",
      skills: ["AWS EC2", "S3", "IAM (learning phase)"],
      icon: Cloud,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Database & Storage",
      skills: ["SQL Server", "File Systems", "Backup Solutions"],
      icon: Database,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Security & Compliance",
      skills: ["ITIL Framework", "Security Protocols", "Access Management"],
      icon: Shield,
      color: "from-red-500 to-pink-500",
    },
  ]

  return (
    <SectionWrapper
      id="skills"
      title="Technical Expertise"
      subtitle="Comprehensive skill set spanning system administration, cloud technologies, and IT service management"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
