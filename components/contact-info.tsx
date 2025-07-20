import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      value: "praveen03561@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8318693067",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Delhi, India",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
      <p className="text-slate-300 text-lg mb-8 leading-relaxed">
        I'm always interested in discussing new opportunities, collaborating on projects, or simply connecting with
        fellow IT professionals. Feel free to reach out!
      </p>

      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 group"
          >
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            >
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
