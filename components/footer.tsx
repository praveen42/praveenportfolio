import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-slate-400 flex items-center justify-center gap-2">
          © {new Date().getFullYear()} Praveen Kumar. Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" />{" "}
          in Delhi, India
        </p>
      </div>
    </footer>
  )
}
