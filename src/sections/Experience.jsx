function Experience() {
  const experiences = [
    {
      title: "First Global Challenge",
      org: "Afghan Dreamers",
      year: "2025",
      desc: "Representing Team Afghanistan in First Global Challenge"
    },
    {
      title: "Seda Hackathon Project",
      org: "Code to Inspire",
      year: "2025",
      desc: "Contributed to the Hackathon 'Seda' within the Fire Wall Power Web Team."
    },
    {
      title: "Vice President",
      org: "Generation of Thinkers",
      year: "2025–Present",
      desc: "Led workshops and capacity building programs."
    },
        {
      title: "Presentation Designer",
      org: "Ghalib University ",
      year: "2024-2025",
      desc: "Design Professional Presentation"
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-cyan-400">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold">
                {exp.title}
              </h3>
              <p className="text-cyan-400">
                {exp.org}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                {exp.year}
              </p>
              <p className="text-gray-400">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience