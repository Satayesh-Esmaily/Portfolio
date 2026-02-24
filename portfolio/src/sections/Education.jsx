function Education() {
  const education = [

    {
      title: "Code to Inspire",
      subtitle: "Web Design and React JS Student",
      year: "2025-2026 Present"
    },
    {
      title: "Afghan Dreamers",
      subtitle: "Robotic and Python Programming Student ",
      year: "2025–2026 Present"
    },
    {
      title: "Heywad High School",
      subtitle: "Grade 10-11-12 Student",
      year: "2024–2026 Present"
    },
    {
      title: "Ghalib School ",
      subtitle: "Grade 8-9 Student  ",
      year: "2022–2023"
    },
    {
      title: "Towhid School ",
      subtitle: "Grade 1-7 Student  ",
      year: "2015-2022"
    }
  ]

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-cyan-400">Education</span>
        </h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-cyan-400 pl-6"
            >
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.subtitle}</p>
              <span className="text-sm text-gray-500">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education