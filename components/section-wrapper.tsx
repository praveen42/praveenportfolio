import type { ReactNode } from "react"

interface SectionWrapperProps {
  id?: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  dark?: boolean
}

export function SectionWrapper({ id, title, subtitle, children, className = "", dark = false }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 px-4 ${dark ? "bg-slate-800/50" : "bg-slate-900/50"} ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 group">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-500">
              {title}
            </span>
          </h2>
          {subtitle && <p className="text-xl text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  )
}
