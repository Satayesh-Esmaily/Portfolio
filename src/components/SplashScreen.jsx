import { useEffect, useState } from "react"

function SplashScreen({ onFinish }) {
  const [exit, setExit] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setExit(true), 2500)
    const timer2 = setTimeout(() => onFinish(), 3200)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center overflow-hidden transition-all duration-700
        ${exit ? "opacity-0 scale-110" : "opacity-100 scale-100"}`}
    >
      {/* Futuristic Floating Lines */}
      <div className="absolute w-full h-full pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`floating-line`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              height: `${Math.random() * 50 + 50}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Center Neon Name */}
      <h1 className="text-6xl md:text-8xl font-bold text-cyan-400 tracking-tight relative neon-text">
        Satayesh
      </h1>
    </div>
  )
}

export default SplashScreen