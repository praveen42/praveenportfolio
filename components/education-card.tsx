import { GraduationCap } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function EducationCard() {
  const education = [
    {
      degree: "Diploma in Computer Science",
      institution: "Maharana Pratap Polytechnic, Gorakhpur",
      period: "2017 – 2020",
      color: "from-green-500 to-teal-500",
    },
    {
      degree: "SSC",
      institution: "Bapu Inter College Peppeganj Gorakhpur",
      period: "2015 – 2016",
      color: "from-blue-500 to-indigo-500",
    },
  ]

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <GraduationCap className="w-6 h-6 text-green-400" />
        Education
      </h3>
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 group">
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index}>
              <div className="flex items-start gap-4">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${edu.color} mt-2 group-hover:scale-125 transition-transform duration-300`}
                ></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white text-lg group-hover:text-blue-400 transition-colors duration-300">
                    {edu.degree}
                  </h4>
                  <p className="text-slate-300 mb-1">{edu.institution}</p>
                  <p className="text-slate-400 text-sm">{edu.period}</p>
                </div>
              </div>
              {index < education.length - 1 && <Separator className="my-6 bg-slate-600" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
