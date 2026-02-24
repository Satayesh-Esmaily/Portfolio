import { useState } from "react"

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-cyan-400">
          Satayesh
        </a>

        <nav className={`md:flex gap-6 ${open ? "block mt-4" : "hidden md:flex"}`}>
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#education" className="hover:text-cyan-400">Education</a>
          <a href="#experience" className="hover:text-cyan-400">Experience</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </nav>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}

export default Header