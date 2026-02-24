import { useState } from "react"
import SplashScreen from "./components/SplashScreen"
import Header from "./components/Header"
import Home from "./sections/Home"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Education from "./sections/Education"
import Experience from "./sections/Experience"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"

function App() {
  const [loading, setLoading] = useState(true)

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />
  }

  return (
    <div className="bg-slate-950 text-white">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App