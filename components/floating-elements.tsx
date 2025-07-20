"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Geometric Shapes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
          }}
        >
          <div
            className={`w-${4 + i * 2} h-${4 + i * 2} bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-float`}
            style={{
              animationDuration: `${6 + i * 2}s`,
            }}
          ></div>
        </div>
      ))}

      {/* Floating Code Symbols */}
      {["</>", "{}", "[]", "()"].map((symbol, i) => (
        <div
          key={symbol}
          className="absolute text-2xl font-mono text-blue-400/20 animate-float"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + i * 15}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${8 + i}s`,
          }}
        >
          {symbol}
        </div>
      ))}
    </div>
  )
}
