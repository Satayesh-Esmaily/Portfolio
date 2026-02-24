import { motion } from "framer-motion";
import portfolioImg from "../assets/portfolio.png"
import emberImg from "../assets/ember.png"
import expenseImg from "../assets/expense.jpg"
import countryImg from "../assets/country.png"
import cryptoImg from "../assets/crypto.jpg"
import pocketImg from "../assets/pocket.png"
function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      category: "Web Development",
      year: "2025-2026",
      description:
        "Responsive portfolio built with React and Tailwind CSS.",
        image: portfolioImg,
      link: "https://github.com/Satayesh-Esmaily/Portfolio"
    },
        {
      title: "Product Catalog",
      category: "Web Development",
      year: "2026",
      description:
        "Modern and simple React project built with React Router to handle routing between pages, including a product listing page and a product detail page.",
      image: emberImg,
        link: "https://github.com/Satayesh-Esmaily/Product-Catalog"
    },
    {
      title: "Expense Tracker",
      category: "Web Development",
      year: "2026",
      description:
        "An Expense Tracker built with React to manage your expense",
        image: expenseImg,
      link: "https://github.com/Satayesh-Esmaily/Expense-Tracker1"
    },
        {
      title: "Country Explorer",
      category: "Web Development",
      year: "2023–2025",
      description:
        "country explorer application powered with React and built with a real API that displays country information such as name, flag, region, and population. ",
        image: countryImg,
        link: "https://github.com/Satayesh-Esmaily/Countries-Explorer"
    },
        {
      title: "Crypto Tracker ",
      category: "Web Development",
      year: "2026",
      description:
        "API Endpoint, React Router, React Hook Form, Tailwind CSS V4, Zod Validation = Responsive react Crypto-Tracker",
        image: cryptoImg,
        link: "https://github.com/Satayesh-Esmaily/Crypto-Tracker"
    },
    {
      title: "Pocket Classroom",
      category: "Web Development",
      year: "2025-2026",
      description:
        "Responsive and modern Pocket Classroom built with HTML,CSS,JavaScript",
        image: pocketImg,
      link: "#"
    }


  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
  key={index}
  className="bg-slate-800 p-6 rounded-xl hover:shadow-xl hover:-translate-y-2 transition duration-300"
>
  {/* 👇 تصویر اینجا باشد */}
  {project.image && (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
  )}

  <div className="flex justify-between text-sm text-gray-400 mb-2">
    <span>{project.category}</span>
    <span>{project.year}</span>
  </div>

  <h3 className="text-xl font-semibold mb-3">
    {project.title}
  </h3>

  <p className="text-gray-400 mb-4">
    {project.description}
  </p>

  <a
    href={project.link}
    target="_blank"
    className="text-cyan-400 hover:underline"
  >
    View Project →
  </a>
</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects